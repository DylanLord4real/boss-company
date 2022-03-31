import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../../Services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  id!: number;
  name!: string;
  img!: string;

  constructor(private prod : ProductService, private route: ActivatedRoute, private routing: Router) { }

  ngOnInit(): void {
    const paramsId = this.route.snapshot.params['id'];
    this.id = this.prod.getProductsById(+paramsId)!.id;
    this.name = this.prod.getProductsById(+paramsId)!.p_name;
    this.img = this.prod.getProductsById(+paramsId)!.img;
  }

}
