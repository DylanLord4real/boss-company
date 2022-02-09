import { InfoService } from './../Services/info.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  serv: any;
  constructor(private info: InfoService) { }

  ngOnInit(): void {
    this.serv = this.info.servTab;
  }

}
