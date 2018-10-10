import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { EssaiComponent } from './essai/essai.component';
import { EssaiService } from './services/essai.service';

@NgModule({
  declarations: [
    AppComponent,
    
    EssaiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EssaiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
