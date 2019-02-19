import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class KeywordsProvider {
  wordList;
  constructor(public http: HttpClient) {
    
  }

  getWords(){
    return this.http.get('assets/words.json')
  }

}
