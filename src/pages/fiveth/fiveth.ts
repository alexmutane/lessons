import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FivethPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fiveth',
  templateUrl: 'fiveth.html',
})
export class FivethPage {

  public username:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.username = this.navParams.get('parameter');
  }

  abrirAulaSeis(){
    alert('go to 6');
  }

}
