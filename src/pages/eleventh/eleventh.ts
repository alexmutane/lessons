import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EleventhPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eleventh',
  templateUrl: 'eleventh.html',
})
export class EleventhPage {

  mentors;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EleventhPage');
    this.mentors = 'books';;
  }

  abrirAulaDoze($event){
    alert();
  }

}
