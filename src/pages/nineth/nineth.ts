import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TenthPage } from '../tenth/tenth';

/**
 * Generated class for the NinethPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nineth',
  templateUrl: 'nineth.html',
})
export class NinethPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
      public modalControler:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NinethPage');
  }

  openModal(){
    let modal = this.modalControler.create(HomePage);
    modal.present();
  }

  abrirDecimaAula(){
    this.navCtrl.push(TenthPage);
  }

}
