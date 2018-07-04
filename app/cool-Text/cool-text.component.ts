import { Component,ElementRef,ViewChild } from '@angular/core';
import coolText from './cool-text.model';

@Component({
  selector: 'app-cool-text',
  templateUrl: './cool-text.component.html',
  styleUrls: ['./cool-text.component.css']
})
export class CoolTextComponent {
  
  @ViewChild('ti') el:ElementRef;
   text:String;
   speed:number;

  coolText:coolText;

  constructor() { 
    
  }

  onText(e){
    this.text = e.target.value;
  }
 onSpeed(e){
    this.speed = e.target.value;
 }

  refresh(){
    debugger; 
    this.coolText = new coolText(this.text,this.speed);
    this.coolText.init(this.el);
    return false;

  }

}
