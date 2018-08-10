export  class  AppareilService {
  appareil = [
    {
      name: 'Machine a laver',
      status: 'Eteint'
    },
    {
      name: 'Fer a repasser',
      status: 'En panne'
    },{
      name: 'television',
      status: 'Allumer'
    },
    {
      name: 'Machine a cafe',
      status: 'Eteint'
    },
    {
      name: 'Ordinateur',
      status: 'Allumer'
    },
  ];
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
