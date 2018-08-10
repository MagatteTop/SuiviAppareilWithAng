import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MonDeuxiemeComponent } from './mon-deuxieme/mon-deuxieme.component';
import { AppareilComponent } from './appareil/appareil.component';

import  { AppareilService} from './services/appareil.service';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MonDeuxiemeComponent,
    AppareilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AppareilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
