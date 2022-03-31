import { ProductService } from './Services/product.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EmailService } from './Services/email/email.service';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactsViewComponent } from './contacts/contacts-view/contacts-view.component';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MenuComponent } from './layout/menu/menu.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ServiceComponent,
    HomeComponent,
    ServiceDetailsComponent,
    ProductComponent,
    DevisComponent,
    ContactsViewComponent,
    ProductViewComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    InfoService,
    EmailService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
