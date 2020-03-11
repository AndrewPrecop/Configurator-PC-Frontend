import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import {FormGroup,FormControl,FormArray,Validators} from '@angular/forms';

import { ConfigurationService } from '../configuration.service';

@Component({
  selector: 'app-configuration-edit',
  templateUrl: './configuration-edit.component.html',
  styleUrls: ['./configuration-edit.component.css']
})
export class ConfigurationEditComponent implements OnInit {
  id: number;
  editMode = false;
  configurationForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private configurationService: ConfigurationService,
              private router: Router)  { 
      
    }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }
  onSubmit() {
    
    if (this.editMode) {
      this.configurationService.updateConfiguration(this.id, this.configurationForm.value);
    } else {
      this.configurationService.addConfiguration(this.configurationForm.value);
    }
    this.onCancel();
  }
  onAddPiece() {
    (<FormArray>this.configurationForm.get('pieces')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onDeletePiece(index: number) {
    (<FormArray>this.configurationForm.get('pieces')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let configurationName = '';
    let configurationImagePath = '';
    let configurationDescription = '';
    let configurationPieces = new FormArray([]);

    if (this.editMode) {
      const configuration = this.configurationService.getConfiguration(this.id);
      configurationName = configuration.name;
      configurationImagePath = configuration.imagePath;
      configurationDescription = configuration.description;
      if (configuration['pieces']) {
        for (let piece of configuration.pieces) {
          configurationPieces.push(
            new FormGroup({
              'name': new FormControl(piece.name, Validators.required),
              'amount': new FormControl(piece.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }

    this.configurationForm = new FormGroup({
      'name': new FormControl(configurationName, Validators.required),
      'imagePath': new FormControl(configurationImagePath, Validators.required),
      'description': new FormControl(configurationDescription, Validators.required),
      'pieces': configurationPieces
    });
  }

}
