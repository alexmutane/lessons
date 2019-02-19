import { Component } from '@angular/core';

@Component({
  selector: 'bloco',
  templateUrl: 'bloco.html'
})
export class BlocoComponent {

  text: string;

  constructor() {
    console.log('Hello BlocoComponent Component');
    this.text = 'Esta informação vem do Bloco-Component';
  }

}
