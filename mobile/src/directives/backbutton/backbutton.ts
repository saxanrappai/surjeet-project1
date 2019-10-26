import { Directive,ElementRef, HostListener, ViewChild } from '@angular/core';
import {Location} from '@angular/common';

import {
  IonicPage,
  NavController,
  NavParams,
  Platform,
  Navbar,
  Content
} from 'ionic-angular';

/**
 * Generated class for the BackbuttonDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[backbutton]' // Attribute selector
})
export class BackbuttonDirective {

  @ViewChild(Navbar) navBar: Navbar;
  constructor(el: ElementRef , private _location: Location, public navCtrl: NavController, public navParams: NavParams, private platform: Platform) {
    console.log('Hello BackbuttonDirective Directive *********************************************');
  }
  @HostListener('click', ['$event'])
  clickEvent(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log('Click from Host Element!');
  //  this._location.back();
  }


  
  ionViewDidLoad() {
    this.navBar.backButtonClick = (e:UIEvent)=>{ 
      console.log('backButtonClick  ');
     this.navCtrl.pop();
    }
  }



}
