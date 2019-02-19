import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@IonicPage()
@Component({
  selector: 'page-audioplay',
  templateUrl: 'audioplay.html',
  providers: [
    NativeAudio
  ]
})
export class AudioplayPage {
  
  mp3file;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private nativeAudio: NativeAudio
  ) {
    this.mp3file = "/assets/audiofile/teste.mp3";
  }

  // playMp3(){
  //   var audio = new Audio(this.mp3file);
  //   audio.play();
  // }

  // pauseMp3(){
  //   var audio = new Audio(this.mp3file);
  //   audio.pause();
  // }


}
