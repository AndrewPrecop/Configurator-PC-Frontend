import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap,take,exhaustMap } from 'rxjs/operators';

import { Configuration } from '../configurations-models/configuration.model';
import { ConfigurationService } from '../configurations-models/configuration.service';
import { AuthService } from '../authentication/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private configurationService: ConfigurationService,
    private authService: AuthService)
    {}

  storeConfigurations() {
    const configurations = this.configurationService.getConfigurations();
    this.http
      .put(
        'https://pcconfig-42261.firebaseio.com/configurations.json',
        configurations
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchConfigurations() {
    this.authService.user.pipe(take(1)).subscribe();
    
    return this.authService.user.pipe(
      take(1),
      exhaustMap(user => {
    return this.http
      .get<Configuration[]>(
        'https://pcconfig-42261.firebaseio.com/configurations.json',
      {
        params:new HttpParams().set('auth',user.token)
      }
      );
    }),
      
        map(configurations => {
          return configurations.map(configuration => {
            return {
              ...configuration,
              pieces: configuration.pieces ? configuration.pieces : []
            };
          });
        }),
        tap(configurations => {
          this.configurationService.setConfigurations(configurations);
        })
      )
  }
}
