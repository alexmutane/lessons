import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { NinethPage } from '../nineth/nineth';

/**
 * Generated class for the EighthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eighth',
  templateUrl: 'eighth.html',
})
export class EighthPage {

  websites: any;
  id: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
      public loadingControl:LoadingController) {
  }

  ionViewDidLoad() {
    this.id = this.navParams.get('id')
    this.websites = this.navParams.get('websites')
  }

  abrirNonaAula(){
    this.navCtrl.push(NinethPage)
  }

  tryLoading(){
    let loader = this.loadingControl.create({
      content: "Carregando em 5 segundos",
      duration: 5000
    });
    loader.present();
  }

}
