import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { KeywordsProvider } from '../../providers/keywords/keywords';
import * as _ from 'underscore'
import { fromEvent } from 'rxjs/observable/fromEvent';
import Rx from 'rxjs/Rx';

@IonicPage()
@Component({
  selector: 'page-highlight',
  templateUrl: 'highlight.html',
  providers:[
    KeywordsProvider
  ]
})
export class HighlightPage {
  text1:string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Gravida neque convallis a cras semper auctor neque vitae. Enim praesent elementum facilisis leo vel fringilla. Maecenas pharetra convallis posuere morbi leo.";
  text2 = "Non odio euismod lacinia at quis risus. Risus viverra adipiscing at in tellus integer feugiat. Sit amet dictum sit amet justo donec enim diam vulputate. Ut placerat orci nulla pellentesque dignissim enim. Enim neque volutpat ac tincidunt. Porta lorem mollis aliquam ut porttitor. Enim praesent elementum facilisis leo vel. Molestie nunc non blandit massa.";
  text3 = "Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Varius quam quisque id diam. Massa placerat duis ultricies lacus sed turpis tincidunt. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Non blandit massa enim nec dui nunc mattis enim ut. Cras adipiscing enim eu turpis egestas pretium. Pharetra et ultrices neque ornare aenean euismod elementum.";
  text4 = "At quis risus sed vulputate odio. Lacus vel facilisis volutpat est velit egestas dui. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Accumsan lacus vel facilisis volutpat. Eget duis at tellus at urna condimentum mattis pellentesque id. Amet risus nullam eget felis. Diam maecenas sed enim ut sem viverra aliquet eget. Enim blandit volutpat maecenas volutpat.";
  
  words;

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController,
    private keywordsProvider : KeywordsProvider
  ) 
  {
    
    this.keywordsProvider.getWords().subscribe(data => {
      this.words = data;

      for(let s of this.words){
        if( this.text1.includes(s.word) ){
          this.text1 = this.text1.replace(s.word, '<span class="'+s.word+'" id="destacar">'+(s.word).toUpperCase()+'</a></span>')
        }
      }
      this.text1;

        const source = Rx.Observable.fromEvent(document, 'click').subscribe( res => {
          
          if( (<Element>event.target).className != ''){
            for(let ss of this.words){
              if( ss.word == (<Element>event.target).className ){
                const alert = this.alertCtrl.create({
                  title: (ss.word).toUpperCase(),
                  subTitle: ss.meaning
                });
                alert.present();
              }
            }
          }
        })
    });

  }//construtor 

}
