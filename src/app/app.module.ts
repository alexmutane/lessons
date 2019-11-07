import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FirstPageModule } from '../pages/first/first.module';
import { SecondPageModule } from '../pages/second/second.module';
import { ThirdPageModule } from '../pages/third/third.module';
import { FourthPageModule } from '../pages/fourth/fourth.module';
import { FivethPageModule } from '../pages/fiveth/fiveth.module';
import { SixthPageModule } from '../pages/sixth/sixth.module';
import { SeventhPageModule } from '../pages/seventh/seventh.module';
import { EighthPageModule } from '../pages/eighth/eighth.module';
import { NinethPageModule } from '../pages/nineth/nineth.module';
import { TenthPageModule } from '../pages/tenth/tenth.module';
import { EleventhPageModule } from '../pages/eleventh/eleventh.module';
import { DownloadPageModule } from '../pages/download/download.module';
import { SharingPageModule } from '../pages/sharing/sharing.module';
import { SixthPage } from '../pages/sixth/sixth';
import { RateappPageModule } from '../pages/rateapp/rateapp.module';
import { UsecompomentPageModule } from '../pages/usecompoment/usecompoment.module';
import { Geolocation } from '@ionic-native/geolocation';
import { GeolocationPageModule } from '../pages/geolocation/geolocation.module';
import { NativestoragePageModule } from '../pages/nativestorage/nativestorage.module';
import { NativeStorage } from '@ionic-native/native-storage';
import { IonicStorageModule } from  '@ionic/storage'
import { AudioplayPageModule } from '../pages/audioplay/audioplay.module';

import { IonicAudioModule, WebAudioProvider, CordovaMediaProvider, defaultAudioProviderFactory } from 'ionic-audio';
import { HighlightPageModule } from '../pages/highlight/highlight.module';
import { KeywordsProvider } from '../providers/keywords/keywords';
import { HttpClientModule } from '@angular/common/http';
import { Firebase } from '@ionic-native/firebase';

export function myCustomAudioProviderFactory() {
  return (window.hasOwnProperty('cordova')) ? new CordovaMediaProvider() : new WebAudioProvider();
}

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule, HttpClientModule,
    IonicAudioModule.forRoot(defaultAudioProviderFactory),
    IonicModule.forRoot(MyApp, {}, {
      links: [
        {component: SixthPage, name: 'six', segment: 'seis', defaultHistory: [HomePage] }
      ]
    }),
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    FirstPageModule, SecondPageModule, ThirdPageModule, FourthPageModule, FivethPageModule, SixthPageModule,
    SeventhPageModule, EighthPageModule, NinethPageModule, TenthPageModule, EleventhPageModule,
    DownloadPageModule,
    SharingPageModule,
    RateappPageModule,
    UsecompomentPageModule,
    GeolocationPageModule,
    NativestoragePageModule, AudioplayPageModule, HighlightPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation, NativeStorage,
    KeywordsProvider,
    Firebase
  ]
})
export class AppModule {}
