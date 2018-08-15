import {Component, OnDestroy, OnInit} from '@angular/core';
import {resolve} from 'q';
import {AppareilService} from './services/appareil.service';
import { Observable, Subject, Subscription, ReplaySubject, from, of, range } from 'rxjs';
import {interval} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements  OnInit, OnDestroy {
  constructor() {
  }

  secondes: number;
  counterSubscription: Subscription;

  ngOnInit() {
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe(
      (value: number) =>{
        this.secondes = value;
      }
    );
  }
  ngOnDestroy(){
    this.counterSubscription.unsubscribe();
  }
}
