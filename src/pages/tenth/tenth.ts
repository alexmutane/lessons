import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { EleventhPage } from '../eleventh/eleventh';

/**
 * Generated class for the TenthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tenth',
  templateUrl: 'tenth.html',
})
export class TenthPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
      public popoverControler:PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TenthPage');
  }

  popOver(){
    let popover = this.popoverControler.create(HomePage);
    popover.present();
  }

  abrirAulaOnze(){
    this.navCtrl.push(EleventhPage);
  }

}
