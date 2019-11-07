import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase';

@Injectable()
export class TrytokenProvider {

  constructor(
    public http: HttpClient,
    private firebase: Firebase
  ) {
    console.log('Hello TrytokenProvider Provider');
    this.tokenIt()
  }

  tokenIt(){
    this.firebase.getToken()
    .then((token) => { 
      console.log(token)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

}
