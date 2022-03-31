import { ProductViewComponent } from './product/product-view/product-view.component';
import { ContactsViewComponent } from './contacts/contacts-view/contacts-view.component';
import { DevisComponent } from './devis/devis.component';
import { ProductComponent } from './product/product.component';
import { ServiceDetailsComponent } from './service/service-details/service-details.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {path: "contacts", component: ContactsComponent},
  {path: "product", component: ProductComponent},
  {path: "product/:id", component: ProductViewComponent},
  {path: "devis", component: DevisComponent},
  {path: "service", component: ServiceComponent},
  {path: "service/:id", component: ServiceDetailsComponent},
  {path: "contacts/view", component: ContactsViewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
