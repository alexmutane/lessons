import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComInputComponent } from '../../components/com-input/com-input';
import { Tipificar } from '../../model/tipificar';

@IonicPage()
@Component({
  selector: 'page-usecompoment',
  templateUrl: 'usecompoment.html',
})
export class UsecompomentPage {

  alunoInfo : Tipificar[] = [];
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
  ){
    this.alunoInfo.push()
  }

}
