import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the GeolocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html',
})
export class GeolocationPage {
  myLat: any;
  myLng: any;

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    public geo: Geolocation
    ) {
      
  }

  ionViewDidLoad() {
    this.geo.getCurrentPosition().then(position => {
      this.myLat = position.coords.latitude,
      this.myLng = position.coords.longitude
    }).catch((error) => {
      console.log('geoLocation doesn\'t work', error);
    });

    let watch = this.geo.watchPosition();
      watch.subscribe((data) => {
        console.log( data.coords.latitude, data.coords.longitude);
     });
  }

}
