import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the SharingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sharing',
  templateUrl: 'sharing.html',
  providers:[
    SocialSharing
  ]
})
export class SharingPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private socialSharing: SocialSharing ) {
  }

  ionViewDidLoad() {
    
  }

  shareIt(){
    //testar se aceita
    this.socialSharing.canShareViaEmail().then( ()=> { console.log('is possible to share') })

    //partilhar
    this.socialSharing.shareViaEmail(
      "Este é um artigo partilhado pelo app de teste. \n Siga o Link: ", 
      "Teste de Share", 
      ["alexmutane@gmail.com"]
    ).then( ()=> { console.log('shared sucessfully!')} ).catch( ()=> { console.log('doesn\'t work')} )
  }

  shareSMS(){
    this.socialSharing.shareViaSMS('Teste de sharing','+258 847922831')
    .then( ()=> {console.log('sent') })
    .catch( ()=> { console.log('doesn\'t work') })
  }

}
