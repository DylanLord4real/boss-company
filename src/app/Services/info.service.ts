import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  servTab = [
    {
      id: 1,
      name: "Développement d'application web",
      img: "https://images.unsplash.com/photo-1580894896813-652ff5aa8146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      desc: "Ce service est dédié à la création d'application web, à savoir tout type d'application impliquant l'utilisation de la technologie web"

    },
    {
      id: 2,
      name: "Sauvegarde",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80",
      desc: "Ce service consiste à sauvergarder les données de nos clients, ou de proposer des solutions de sauvegarde sur des serveurs distants et les aidez à gerer l'utilisation"
    },
    {
      id: 3,
      name: "Maintenace / Entretien",
      img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      desc: "une description du service de manière complete"
    },
    {
      id: 4,
      name: "Gestion électronique des données",
      img: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1106&q=80",
      desc: "Ce service vous permets d'assurer le traitement de vos données electronique de manière sûre et efficace "
    },
    {
      id: 5,
      name: "Solution mobile",
      img: "https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      desc: "une description du service de manière complete"
    },
    {
      id: 6,
      name: "Raccordement inter site",
      img: "https://images.unsplash.com/photo-1581092446327-9b52bd1570c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      desc: "une description du service de manière complete"
    },
    {
      id: 7,
      name: "Installation réseau",
      img: "https://images.unsplash.com/photo-1591808216268-ce0b82787efe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      desc: "Nous vous proposons ce service pour vous faciliter l'installation de vos locaux au niveau de la mise en réseau de tout les appareils le néccessitant"
    },
    {
      id: 8,
      name: "Création de site web et messagerie professeionelle",
      img: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
      desc: "Nous proposons de vous créer un site web pour votre entreprise, de pouvoir l'héberger et de vous fournir une messagerie professionelle equivalente à votre entreprise"
    },
    {
      id: 9,
      name: "Installation Camera de sécurité",
      img: "https://images.unsplash.com/photo-1563920443079-783e5c786b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
      desc: "Nous installons des cameras en vue de protéger vos locaux."
    }


  ];

  constructor() { }

  getServiceById(id: number){
    const service = this.servTab.find(
      (s) => {
        return s.id === id;
      }
    );
    return service;
  }

}
