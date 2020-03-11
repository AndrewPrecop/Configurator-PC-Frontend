import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


import { Configuration } from '../configuration.model';
import { ConfigurationService } from '../configuration.service';

@Component({
  selector: 'app-configuration-detail',
  templateUrl: './configuration-detail.component.html',
  styleUrls: ['./configuration-detail.component.css']
})
export class ConfigurationDetailComponent implements OnInit {
  configuration: Configuration;
  id: number;

  constructor(private configurationService: ConfigurationService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.configuration = this.configurationService.getConfiguration(this.id);
        }
      );
  }
  
  onAddToShoppingList() {
    this.configurationService.addPiecesToShoppingList(this.configuration.pieces);
  }

  onEditConfiguration() {
    this.router.navigate(['edit'], {relativeTo: this.route});
     }
  onDeleteConfiguration() {
      this.configurationService.deleteConfiguration(this.id);
      this.router.navigate(['/configurations-models']);
    }
}