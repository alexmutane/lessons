import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EighthPage } from '../eighth/eighth';

/**
 * Generated class for the SeventhPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seventh',
  templateUrl: 'seventh.html',
})
export class SeventhPage {

  websites = ['Cotus','Matxessa','AlexMutane','SemearSucesso']
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  abrirOitavaAula(parameter){
    parameter = 2
    this.websites
    this.navCtrl.push(EighthPage, {id: parameter, websites: this.websites})
  }

}
