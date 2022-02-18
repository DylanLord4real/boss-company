import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products = [
    {
      p_name: "Ordinateur dernière génération",
      img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    },
    {
      p_name: "Desktop",
      img: "https://images.unsplash.com/photo-1529336953128-a85760f58cb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      p_name: "Serveur",
      img: "https://cdn.pixabay.com/photo/2019/08/08/16/52/server-4393370_960_720.jpg",
    },
    {
      p_name: "Autocom",
      img: "https://nowtechcenter.com/wp-content/uploads/2018/04/Autocom-Panasonic-KX-NCP1000-System.gif",
    },
    {
      p_name: "Switch",
      img: "https://images.unsplash.com/photo-1636613153231-3fa10ca4af05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    },
    {
      p_name: "Logiciel de Gestion",
      img: "https://cdn.dribbble.com/users/6252196/screenshots/17426720/media/eb94531da3b865f2907d3b8225e29050.png?compress=1&resize=1200x900&vertical=top",
    },
    {
      p_name: "Copieur",
      img: "https://curie77.fr/wp-content/uploads/2019/02/417843_1.png",
    },
    {
      p_name: "Imprimante & Scanner",
      img: "https://cdn.pixabay.com/photo/2013/07/13/12/19/printer-159612__340.png",
    },
    {
      p_name: "Téléphone fixe",
      img: "https://www.faitesvousconnaitre.com/images/articles/image-choisir-entre-un-telephone-fixe-et-un-telephone-portable%E2%80%89.jpeg",
    },
    {
      p_name: "Onduleur",
      img: "https://dakarstock.com/wp-content/uploads/2020/06/mercury-1050-va-maverick.jpg",
    },
    {
      p_name: "Fax",
      img: "https://media.istockphoto.com/photos/pushing-start-button-old-fax-retro-picture-id585525826?k=20&m=585525826&s=612x612&w=0&h=EAF7s14w4_WGUjwngA0yerLuLQ6RepdcYKvsI3Ti0Bs=",
    },
    {
      p_name: "Caméra IP",
      img: "https://shopdelta.eu/shop_image/product/ipc-hfw2531s-s-0280b-s2_d.jpg",
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
