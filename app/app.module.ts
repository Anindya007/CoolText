import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';



import { CoolTextComponent } from './cool-text/cool-text.component';

@NgModule({
  declarations: [
    CoolTextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [CoolTextComponent]
})
export class AppModule { }
