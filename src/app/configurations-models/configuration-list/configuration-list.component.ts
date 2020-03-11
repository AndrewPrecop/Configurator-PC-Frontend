import { Component, OnInit,OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Configuration } from '../configuration.model';
import { ConfigurationService } from '../configuration.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-configuration-list',
  templateUrl: './configuration-list.component.html',
  styleUrls: ['./configuration-list.component.css']
})
export class ConfigurationListComponent implements OnInit,OnDestroy {
  configurations: Configuration[] ;
  subscription: Subscription;

  constructor(private configurationService: ConfigurationService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  
    this.subscription = this.configurationService.configurationsChanged
      .subscribe(
        (configurations: Configuration[]) => {
          this.configurations = configurations;
        }
      );
    this.configurations = this.configurationService.getConfigurations();    
  }
  onNewConfiguration() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
