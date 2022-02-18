import { ProductComponent } from './product/product.component';
import { InfoService } from './Services/info.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ServiceComponent } from './service/service.component';
import { HomeComponent } from './home/home.component';
import { ServiceDetailsComponent } from './service/service-details/service-details.component';
import { DevisComponent } from './devis/devis.component';
import { FormsModule } from '@angular/forms';
import { ContactsViewComponent } from './contacts/contacts-view/contacts-view.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ServiceComponent,
    HomeComponent,
    ServiceDetailsComponent,
    ProductComponent,
    DevisComponent,
    ContactsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    InfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
