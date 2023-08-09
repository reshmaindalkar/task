import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl:string="https://jsonplaceholder.typicode.com/todos";
  constructor(private http:HttpClient) { }

  getDataFromServer(endPoint:string){
    const url=this.baseUrl+endPoint;
return this.http.get(url);
  }
}
