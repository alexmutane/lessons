import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchProvider } from '../../providers/search/search';
import { NgModel } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@IonicPage()
@Component({
  selector: 'page-searching',
  templateUrl: 'searching.html',
  providers:[
    SearchProvider
  ]
})
export class SearchingPage {

  @ViewChild('filterInput') filterInput: NgModel
  teachingList;
  auxiliarList;
  searchTerm: string;

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    public searchingProvider: SearchProvider
  ) {
    searchingProvider.getInfo()
  }

  searchForTeachings(event) {
    this.searchingProvider.getSearched(event);
  }

}
