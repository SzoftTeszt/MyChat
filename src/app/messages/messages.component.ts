import { afterRender, Component, OnDestroy, OnInit } from '@angular/core';
import { BaseService } from '../base.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent implements OnInit, OnDestroy{
  messages:any=[]
  userName=""
  feliratkozas!:Subscription

  constructor(private base:BaseService, private auth:AuthService){

    auth.getUsername().subscribe(
      (res)=>this.userName=res
    )

    afterRender(
      ()=>document.getElementById("pageend")?.scrollIntoView(
        { behavior: "smooth", block: "end", inline: "nearest" }
      )
    )
  }

  ngOnInit(): void {    
    this.feliratkozas=this.base.getAllMessage().subscribe(
      (res:any)=>{
        this.messages=[]
        for (const key in res) {
          console.log(res[key])
          this.messages.push(res[key])
        }   
      }
    )
  }

  ngOnDestroy(): void {
      if (this.feliratkozas) this.feliratkozas.unsubscribe();
  }

  pageDown(){
    document.getElementById("pageend")?.scrollIntoView(
      { behavior: "smooth", block: "end", inline: "nearest" }
    )
  }
}
