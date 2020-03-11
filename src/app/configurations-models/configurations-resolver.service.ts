import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Configuration } from './configuration.model';
import { DataStorageService } from '../shared/data-storage.service';
import { ConfigurationService } from './configuration.service';

@Injectable({ providedIn: 'root' })
export class ConfigurationsResolverService implements Resolve<Configuration[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private configurationsService: ConfigurationService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const configurations = this.configurationsService.getConfigurations();

    if (configurations.length === 0) {
      return this.dataStorageService.fetchConfigurations();
    } else {
      return configurations;
    }
  }
}
