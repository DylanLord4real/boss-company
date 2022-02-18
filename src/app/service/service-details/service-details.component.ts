import { InfoService } from './../../Services/info.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent implements OnInit {
  id!: number;
  descdet!: string;
  name!: string;
  img!: string;
  constructor(private info : InfoService, private route: ActivatedRoute, private routing: Router) { }


  ngOnInit(): void {
    const paramsId = this.route.snapshot.params['id'];
    this.id = this.info.getServiceById(+paramsId)!.id;
    this.descdet =  this.info.getServiceById(+paramsId)!.desc;
    this.name = this.info.getServiceById(+paramsId)!.name;
    this.img = this.info.getServiceById(+paramsId)!.img;
  }

}
