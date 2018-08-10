import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);

      }, 1000
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
