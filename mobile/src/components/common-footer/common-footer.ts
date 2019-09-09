import { Component, Input } from '@angular/core';

/**
 * Generated class for the ComponentsCommonFooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'common-footer',
  templateUrl: 'common-footer.html'
})
export class CommonFooterComponent {

  text: string;
  @Input() iconSelected: string;
  constructor() {
    console.log('Hello ComponentsCommonFooterComponent Component');
    this.text = 'Hello World';
    this.initializeApp();
  }
  initializeApp(){
  console.log("iconSelected", this.iconSelected);

  }
}
