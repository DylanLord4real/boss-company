import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ContactsController {
  constructor(){}
  BASE_API_URL! : any;
  //ici on va gerer la connexion avec la base de donnée pour pouvoir envoyer les mails depuis la page de contact
}
