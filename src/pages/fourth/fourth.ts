import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FivethPage } from '../fiveth/fiveth';
import { SixthPage } from '../sixth/sixth';

/**
 * Generated class for the FourthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fourth',
  templateUrl: 'fourth.html',
})
export class FourthPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
      public alertController: AlertController) {
  }

  ionViewDidLoad() { 
  }

  openAlert(){
    let alert = this.alertController.create({
      title: 'Preencha o Campo',
      inputs: [
        {
          type: 'textbox',
          placeholder: 'Digitar um Nome',
          name: 'username'
        }
      ],
      buttons: [
        {
          text: 'Outra Aula',
          handler: data =>{
            this.navCtrl.push(FivethPage, { parameter: data.username });
          }
        }
      ]
    });
    alert.present();
  }

  abrirSextaAula(){
    this.navCtrl.push(SixthPage);
  }

}
