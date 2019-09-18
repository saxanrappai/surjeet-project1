import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController, Platform, Alert } from 'ionic-angular';

/**
 * Generated class for the ComponentsCommonFooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'common-footer',
  templateUrl: 'common-footer.html',
})
export class CommonFooterComponent {

  text: string;
  mySelectedIndex = 2;
  @Input() iconSelected: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('Hello ComponentsCommonFooterComponent Component');
    this.text = 'Hello World';
    this.initializeApp();
  }
  initializeApp(){
  console.log("iconSelected", this.iconSelected);

  }

  onClickNavigation(url){
    console.log("url",url);
    this.navCtrl.push(url);
  }
}
