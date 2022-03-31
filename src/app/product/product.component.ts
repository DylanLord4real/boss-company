import { ProductService } from './../Services/product.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products : any;
  constructor(private route : Router, private prod : ProductService) { }

  ngOnInit(): void {
    this.products = this.prod.prods;
  }

  goToProductView(id:number){
    this.route.navigate(['/product/'+id]);
  }

}
