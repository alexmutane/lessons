import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-audioplay',
  templateUrl: 'audioplay.html',
})
export class AudioplayPage {
  
  mp3file;
  myAudio = new Audio();
  listaAudios = [
    {"id":903,"primary_language_id":0,"secondary_language_id":null,"en_title":"2 Kings 2.","pt_title":"2 Reis 2.","teaching_url":"https://api.fontedavida.org/uploads/16/Teaching/Pr-Julio.mp3","teacher_id":32,"length":"00:35:06","organization_id":16,"download_counter":4,"hit_counter":2,"created_at":"2019-08-27 12:06:41"},
    {"id":902,"primary_language_id":0,"secondary_language_id":null,"en_title":"Sin of Abomination.","pt_title":"Pecado de Abominação.","teaching_url":"https://api.fontedavida.org/uploads/16/Teaching/Ap-Danny-Pecado-de-Obinacao.mp3","teacher_id":25,"length":"00:45:36","organization_id":16,"download_counter":0,"hit_counter":3,"created_at":"2019-08-27 12:00:45"},
    {"id":901,"primary_language_id":0,"secondary_language_id":1,"en_title":"Perfect heart.","pt_title":"Coração Perfeito.","teaching_url":"https://api.fontedavida.org/uploads/16/Teaching/Ap+Danny+-+Coracao+Perfeito-editada.mp3","teacher_id":25,"length":"00:27:50","organization_id":16,"download_counter":1,"hit_counter":0,"created_at":"2019-08-08 12:29:42"},
    {"id":900,"primary_language_id":0,"secondary_language_id":null,"en_title":"The prodigal son.","pt_title":"O Filho pródigo.","teaching_url":"https://api.fontedavida.org/uploads/12/Teaching/O+Filho+Prodigo-Editado.mp3","teacher_id":17,"length":"00:47:45","organization_id":12,"download_counter":0,"hit_counter":0,"created_at":"2019-08-08 08:57:40"},
    {"id":899,"primary_language_id":0,"secondary_language_id":null,"en_title":"Metamorfose-parte04","pt_title":"Metamorfose-parte04","teaching_url":"https://api.fontedavida.org/uploads/20/Teaching/Metamorfose-parte04.mp3","teacher_id":30,"length":"00:10:09","organization_id":20,"download_counter":7,"hit_counter":3,"created_at":"2019-07-23 09:03:42"},
    {"id":898,"primary_language_id":0,"secondary_language_id":null,"en_title":"Metamorfose-parte03","pt_title":"Metamorphosis-part03","teaching_url":"https://api.fontedavida.org/uploads/20/Teaching/Metamorfose-parte3.mp3","teacher_id":30,"length":"00:09:00","organization_id":20,"download_counter":8,"hit_counter":5,"created_at":"2019-07-15 15:08:24"}
  ]
  showFooter: boolean;
  tocando: any;
  showPlayButton: boolean;
  audioTime;
  currentTime;
  intervaal;
  pausedTime;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
  ) {
    //this.mp3file = "/assets/audiofile/teste.mp3";
  }

  play(audioFile){
    this.myAudio.src = audioFile.teaching_url;
    
    setTimeout(() => {
      this.audioTime = this.myAudio.duration/60,2
      this.myAudio.load();
      this.myAudio.play();
    }, 500)

    this.showFooter = true;
    this.tocando = audioFile;
    this.showPlayButton = false;

    this.playerProgress(audioFile.length, 'play')
  }

  pause(audioFile){
    this.myAudio.src = audioFile.teaching_url;
    this.myAudio.load();
    this.myAudio.pause();

    this.showPlayButton = true;
    this.playerProgress(audioFile.length, 'pause')
  }

  next(currentFile){
    let current = this.listaAudios.indexOf(currentFile)
    if(current < this.listaAudios.length-1){
      let nextItem = this.listaAudios[current+1];
      this.play(nextItem);
    }
  }

  prev(currentFile){
    let current = this.listaAudios.indexOf(currentFile)
    if(current >= 1){
      let prevItem = this.listaAudios[current-1];
      this.play(prevItem);
    }
  }

  playerProgress(fulllength, status){
    let hms = fulllength.split(':');
    let seconds = (+hms[0])*60*60 + (+hms[1])*60 + (+hms[2]);
    let current = 0;

    switch(status){
      case 'play': {
        this.intervaal = setInterval(()=>{
          if(current <= seconds){
            this.toHHMMSS(current);
            current++;
            this.pausedTime = current;
          }
          else{
            //this.next();
            clearInterval(this.intervaal);
          }
        }, 1000);
        break;
      }
      case 'pause': {
        this.currentTime = this.toHHMMSS(this.pausedTime);
        clearInterval(this.intervaal);
        break;
      }
      default: { clearInterval(this.intervaal); }
    }
  }

  toHHMMSS(nrseconds) {
    var hours = Math.floor(nrseconds / 3600) < 10 ? ("00" + Math.floor(nrseconds / 3600)).slice(-2) : Math.floor(nrseconds / 3600);
    var minutes = ("00" + Math.floor((nrseconds % 3600) / 60)).slice(-2);
    var seconds = ("00" + (nrseconds % 3600) % 60).slice(-2);
    hours == "00" ? (this.currentTime = minutes + ":" + seconds) : (this.currentTime = hours + ":" + minutes + ":" + seconds);
    return this.currentTime;
  }

  calculateTime(time){
    let hms = time.split(':');
    return hms[0] == "00" ? hms[1]+':'+hms[2] : hms[0]+':'+hms[1]+':'+hms[2];
  }

}
