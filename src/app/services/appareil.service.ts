export  class  AppareilService {
  appareil = [
    {
      id: 1,
      name: 'Machine a laver',
      status: 'Eteint'
    },
    {
      id: 2,
      name: 'Fer a repasser',
      status: 'En panne'
    },{
      name: 'television',
      status: 'Allumer'
    },
    {
      id: 3,
      name: 'Machine a cafe',
      status: 'Eteint'
    },
    {
      id: 4,
      name: 'ordinateur',
      status: 'Allumer'
    },
  ];
  getAppareilByID(id: number){
    const appar = this.appareil.find(
      (appareilObject) => {
        return appareilObject.id === id;
      }
    );
    return appar;
  }
  switchOnAll(){
    for (let apparei of this.appareil) {
      apparei.status='Allumer';
    }
  }
  switchOffAll() {
    for (let apparei of this.appareil) {
      apparei.status = 'Eteint';
    }
  }
  switchOnOne(index: number){
    this.appareil[index].status='Allumer';
  }
  switchOnOff(index: number){
    this.appareil[index].status='Eteint';
  }

}
