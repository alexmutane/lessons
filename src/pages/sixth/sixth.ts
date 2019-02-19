import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeventhPage } from '../seventh/seventh';
import { FivethPage } from '../fiveth/fiveth';

/**
 * Generated class for the SixthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sixth',
  templateUrl: 'sixth.html',
})
export class SixthPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SixthPage');
  }

  abrirSetimaAula(){
    this.navCtrl.push(SeventhPage);
  }
  abrirQuintaAula(){
    this.navCtrl.push(FivethPage)
  }

}
