import { Router } from '@angular/router';
import { InfoService } from './../Services/info.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  serv: any;
  constructor(private info: InfoService, private router: Router) { }

  ngOnInit(): void {
    this.serv = this.info.servTab;
  }
  goToServiceView(servId: number){
    this.router.navigate(['/service/'+servId])
  }

}
