import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  servTab = [
    {
      name: "Développement d'application web",
      img: "url(service2.jpg)"

    },
    {
      name: "Sauvegarde",
      img: "url(./../../assets/images/data-center.jpg)"
    },
    {
      name: "Maintenace / Entretien",
      img: "url(accueil3.jpg)"
    },
    {
      name: "Gestion électronique des données",
      img: "url(./../../assets/images/Icon.jpeg)"
    },
    {
      name: "Solution mobile",
      img: "url(./../../assets/images/programming.jpg)"
    },
    {
      name: "Raccordement inter site",
      img: "url(./../../assets/images/inter-site.jpg)"
    },
    {
      name: "Installation réseau",
      img: "url(./../../assets/images/service1.jpg)"
    },
    {
      name: "Création de site web et messagerie professeionelle",
      img: "url(./../../assets/images/bureau_2.jpg)"
    },
    {
      name: "Installation Camera de sécurité",
      img: "url(./../../assets/images/cctv.jpg)"
    }


  ];

  constructor() { }

}
