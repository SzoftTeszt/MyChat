import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrl: './send.component.css'
})
export class SendComponent {
  message=""
  constructor(private base:BaseService){}

  sendMessage(){
    this.base.addMessage(this.message)
  }
}
