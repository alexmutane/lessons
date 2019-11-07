import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as _ from 'underscore';

@Injectable()
export class SearchProvider {
  teachingList:any;
  auxiliarList:any;

  constructor(public http: HttpClient) {
    
  }

  getInfo(){
    this.http.get('http://api.fontedavida.org/teaching/api').subscribe(res => {
      this.teachingList = this.auxiliarList = res;

    })
  }
    
  getSearched(event){
    let value = event.target.value;
    
    if (value && value.trim() != '') {
      this.teachingList = this.teachingList.filter((atual) => {
        let posicao = atual.pt_title.toLowerCase().indexOf(value.toLowerCase());
        if(posicao > -1){
          let test = atual.pt_title.toLowerCase().replace(value.toLowerCase(),'<span class="selecionado">' + value + '</span>');
          console.log(test);
          return atual;
        }
      })
    }
    else{
      this.teachingList = this.auxiliarList
    }
  }

}
