import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { Storage } from '@ionic/storage';  

@IonicPage()
@Component({
  selector: 'page-nativestorage',
  templateUrl: 'nativestorage.html',
})
export class NativestoragePage {

  saved:any;
  teaching:any = {"id":876,"primary_language_id":0,"secondary_language_id":null,"en_title":"The power of a mother.","pt_title":"O poder de uma mãe","teaching_url":"http:\/\/api.fontedavida.org\/uploads\/11\/Teaching\/Sergio-Licova-O-poder-de-uma-mae-parte.mp3","teacher_id":16,"length":"00:21:59","organization_id":11,"download_counter":11,"hit_counter":27,"created_at":"2019-01-17 13:52:45"}
  favorite: boolean = false;
  favoriteIcon: string;
  
  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private nativeStorage: NativeStorage,
    private storage: Storage
  ) {
  }

  ionViewDidLoad() {

    /////////////////////////////////////////////////////////////
    this.storage.set('name','Alex Mutane Testes');
    this.storage.get('name').then((value)=>{ this.saved = value; });
    
    this.storage.set('teaching', this.teaching);
    this.storage.get('teaching').then((value)=>{ this.teaching = value; })

    this.storage.set('favorite', '["true", ""]')

    this.switchFavorite(this.teaching, this.favorite);
  }

  switchFavorite(teaching, favorite){
    console.log('t: ', teaching, 'f: ', favorite)
      if(favorite == true){
        this.favorite = false;
        this.favoriteIcon = 'star'
      }
      else{
        this.favorite = true;
        this.favoriteIcon = 'star-outline'
      }
  }
  

}
