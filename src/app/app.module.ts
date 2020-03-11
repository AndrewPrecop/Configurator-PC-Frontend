import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ConfigurationsModelsComponent } from './configurations-models/configurations-models.component';
import { ConfigurationListComponent } from './configurations-models/configuration-list/configuration-list.component';
import { ConfigurationDetailComponent } from './configurations-models/configuration-detail/configuration-detail.component';
import { ConfigurationItemComponent } from './configurations-models/configuration-list/configuration-item/configuration-item.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import{AppRoutingModule} from './app-routing.module'
import { ConfigurationStartComponent } from './configurations-models/configuration-start/configuration-start.component';
import { ConfigurationEditComponent } from './configurations-models/configuration-edit/configuration-edit.component';
import { ConfigurationService } from './configurations-models/configuration.service';
import { AuthComponent } from './authentication/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinners/loading-spinner.componetn';
import { AuthInterceptorService } from './authentication/auth-interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConfigurationsModelsComponent,
    ConfigurationListComponent,
    ConfigurationDetailComponent,
    ConfigurationItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    ConfigurationStartComponent,
    ConfigurationEditComponent,
    AuthComponent,
    LoadingSpinnerComponent
    
   ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ShoppingListService,
    ConfigurationService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
