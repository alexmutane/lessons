import { Component, Input } from '@angular/core';

/**
 * Generated class for the ComInputComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'com-input',
  templateUrl: 'com-input.html'
})
export class ComInputComponent {

 @Input() dados : any;

  constructor() {
    this.dados = {
      "nome" : "Alex Mutane",
      "curso": "Ionic + Typescript",
      "aula": "Component com input-property",
      "data" : "11.01.2019"
      }
  }

}
