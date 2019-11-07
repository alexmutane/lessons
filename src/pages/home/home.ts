import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirstPage } from '../first/first';
import { SixthPage } from '../sixth/sixth';
import { TenthPage } from '../tenth/tenth';
import { DownloadPage } from '../download/download';
import { SharingPage } from '../sharing/sharing';
import { RateappPage } from '../rateapp/rateapp';
import { UsecompomentPage } from '../usecompoment/usecompoment';
import { GeolocationPage } from '../geolocation/geolocation';
import { NativestoragePage } from '../nativestorage/nativestorage';
import { AudioplayPage } from '../audioplay/audioplay';
import { HighlightPage } from '../highlight/highlight';
import { KeywordsProvider } from '../../providers/keywords/keywords';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private apagarIssoProv: KeywordsProvider
  ) {
    //apagar a linha acima a linha abaixo e a respectiva função no provider
    apagarIssoProv.apagarIsso();
  }

  abrirPrimeiraAula(){ this.navCtrl.push(FirstPage); }
  
  abrirSextaAula(){ this.navCtrl.push(SixthPage); }

  abrirDecimaAula(){ this.navCtrl.push(TenthPage); }

  abrirDownload(){ this.navCtrl.push(DownloadPage); }

  abrirSharing(){ this.navCtrl.push(SharingPage); }
  
  rateMyApp(){ this.navCtrl.push(RateappPage); }
  
  abrirUseComponent(){ this.navCtrl.push(UsecompomentPage); }

  GeoLocalizacao(){ this.navCtrl.push(GeolocationPage); }

  nativeStorage(){ this.navCtrl.push(NativestoragePage); }

  playAudio(){ this.navCtrl.push(AudioplayPage); }

  highlight(){ this.navCtrl.push(HighlightPage) }
}
