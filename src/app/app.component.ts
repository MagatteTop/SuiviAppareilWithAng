import {Component, OnInit} from '@angular/core';
import {resolve} from 'q';
import {AppareilService} from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);

        }, 2000
      );
    });
  appareil: any[];

  //injection dans le constructeur
  constructor(private  appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  ngOnInit(){
    this.appareil = this.appareilService.appareil;
  }
  onAllumer() {
    this.appareilService.switchOnAll();
    console.log('On allume tout !');
  }
  onEteindre(){
    this.appareilService.switchOffAll();
    console.log('On eteint tout !');
  }
  }


