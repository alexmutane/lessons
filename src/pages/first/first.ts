import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { SecondPage } from '../second/second';

/**
 * Generated class for the FirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
      public actionSheetControler: ActionSheetController,
      public alertControler: AlertController) {
  }

  ionViewDidLoad() {
    
  }

  openActionSheet(){
      let actionSheet = this.actionSheetControler.create({
        title: 'Opções',
        buttons: [
          {
            text: 'Ir à Segunda Aula',
            icon: 'arrow-forward',
            handler: () =>{
              this.navCtrl.push(SecondPage);
            }
          },
          {
            text: 'Alert Com Radio',
            icon: 'bulb',
            handler: ()=>{
              this.alertWithRadio();
            }
          },
          {
            text: 'Fechar',
            icon: 'close',
            role: 'cancel'
          }
        ]
      });
      actionSheet.present();
  }

//----------------ALERT ------------- //
  openAlert(){
      let alert = this.alertControler.create({
        title: 'Mouse',
        subTitle: 'O mouse é um equipamento muito útil para o uso do computador',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Outro Alert',
            handler: () =>{
              this.alertWithRadio();
            }
          }
        ]
      });
      alert.present();
  }

  alertWithRadio(){
      let alertRadio = this.alertControler.create({
        title: 'Marcar Opções!!!',
        subTitle: 'testando escolhas com Radio'
      }); 
      alertRadio.addInput({
        type: 'radio',
        label: 'Primeiro',
        value: '1st',
      });
      alertRadio.addInput({
        type: 'radio',
        label: 'Segundo',
        value: '2nd'
      });
      alertRadio.addButton('Cancel');

      alertRadio.present();
  }

}
