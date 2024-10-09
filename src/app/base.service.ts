import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url="http://172.16.16.148:7178/api/Messages/"

  constructor(private http:HttpClient) { }

  addMessage(message:string){
    let body:any={}
    body.userName="JAttila"
    body.uzi=message

    console.log("Body:", body)

    this.http.post(this.url,body).forEach(
      (res)=>console.log("Sikeres üzi küldés", res)
    )

  }

  getAllMessage(){
    return this.http.get(this.url)
  }

}
