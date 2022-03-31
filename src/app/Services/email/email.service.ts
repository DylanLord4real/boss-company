import { Contacts } from './../Class/Contacts';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  //API_URL = "https://rocky-plains-92139.herokuapp.com";
  API_URL = "http://localhost:3000"

  sendMessage(url:string,userInfo:Contacts){

    return this.http.post(url, userInfo,
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      });
  }
}
