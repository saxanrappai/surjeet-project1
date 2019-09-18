import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , Nav } from 'ionic-angular';
import { Storage } from '@ionic/storage';
//import { Platform, MenuController, Nav } from 'ionic-angular';

/**
 * Generated class for the PagesSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pages-settings',
  templateUrl: 'pages-settings.html',
})
export class PagesSettingsPage {

  constructor(public navCtrl: NavController,
    
    private nativeStorage: Storage,
     public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagesSettingsPage');
  }

  data=[
{title:"My Profile", icon:"person"},
{title:"Edit Profile", icon:"create"},
{title:"Notification", icon:"notifications"},
{title:"Change Password", icon:"lock"},
{title:"Feedback", icon:"chatbubbles"},
{title:"Frequently Asked Questions", icon:"help-circle"},
{title:"Terms and Conditions", icon:"document"},
{title:"Privacy Policy", icon:"briefcase"},

  ];

  logout(){
    this.nativeStorage.set('loggedin', false); 
    this.navCtrl.push("LandingPage");
  }

}
