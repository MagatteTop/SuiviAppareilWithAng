import {Subject} from 'rxjs';
import { HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class AppareilService {
appareilSubject = new Subject<any[]>();
   private appareil = [];
  constructor(private  httpClient: HttpClient){}
  emitAppareilSubject(){
    this.appareilSubject.next(this.appareil.slice());
  }

  getAppareilByID(id: number){
    const appar = this.appareil.find(
      (appareilObject) => {
        return appareilObject.id === id;
      }
    );
    return appar;
  }


  switchOnAll() {
    for(let appareil of this.appareil) {
      appareil.status = 'Allumer';
    }
    this.emitAppareilSubject();
  }

  switchOffAll() {
    for(let appareil of this.appareil) {
      appareil.status = 'Eteint';
    }
    this.emitAppareilSubject();

  }
  switchPanneAll() {
    for(let appareil of this.appareil) {
      appareil.status = 'En panne';
    }
    this.emitAppareilSubject();

  }

  switchOnOne(i: number) {
    this.appareil[i].status = 'Allumer';
    this.emitAppareilSubject();

  }

  switchOffOne(i: number) {
    this.appareil[i].status = 'Eteint';
    this.emitAppareilSubject();

  }
  switchPanneOne(i: number) {
    this.appareil[i].status = 'En panne';
    this.emitAppareilSubject();

  }
  addAppareil(name: string, status: string){
    const appareilObject = {
      id: 0,
      name: '',
      status: '',
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareil[(this.appareil.length- 1)].id + 1;

    this.appareil.push(appareilObject);
    this.emitAppareilSubject();
  }
  saveAppareilsToServer(){
    this.httpClient.put('https://http-client-demo-9b531.firebaseio.com/appareils.json',this.appareil).subscribe(
      () => {
        console.log('Enregistrerment termine |');
      },
      (error) => {
        console.log('Erreur de sauvegarde a la bdd '+ error);
      }
    )
  }
  getAppareilsFromServer(){
    this.httpClient.get<any[]>('https://http-client-demo-9b531.firebaseio.com/appareils.json')
      .subscribe(
        (response) => {
          this.appareil = response;
          this.emitAppareilSubject();
        },
        (error) => {
          console.log('Erreur de chargement des donnees du serveur '+ error);
        }
      );
  }

}
