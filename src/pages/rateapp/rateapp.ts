import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppRate } from '@ionic-native/app-rate';


@IonicPage()
@Component({
  selector: 'page-rateapp',
  templateUrl: 'rateapp.html',
  providers: [
    AppRate
  ]
})
export class RateappPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private appRate: AppRate)
  {
    appRate.preferences = {
      displayAppName: 'Alex Lessons',
      promptAgainForEachNewVersion: true,
      usesUntilPrompt: 4,
      storeAppURL: { 
        android: 'market://details?id=com.equipmozambique.fontedavida' 
      },
      customLocale : {
        appRatePromptTitle: 'Curte este App?',
        title: '',
        message: 'Se curtes é só dar um joinha no PlayStore',
        laterButtonLabel: 'Tou busy agora, mais tarde',
        rateButtonLabel: 'vam\'bora!!!'
      }
    }

    appRate.promptForRating(true);
    //appRate.navigateToAppStore();
  }

}
