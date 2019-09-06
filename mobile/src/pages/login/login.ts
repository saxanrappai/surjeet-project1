import { FCM } from '@ionic-native/fcm';
import { HttpService } from './../../services/HttpService';
import { MenuService } from './../../services/menu-service';
import { LoginService } from './../../services/login-service';
import { IService } from './../../services/IService';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { ToastService } from '../../services/toast-service';
import { MainProductPage } from '../main-product/main-product';
import { Storage } from '@ionic/storage';
import { Location } from '@angular/common';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [LoginService, ToastService]
})
export class LoginPage {


  page: any;
  params: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public httpService: HttpService,
    private nativeStorage: Storage,
    private platform: Platform,
    private firebase: FCM,
    private toastCtrl: ToastService,
    public location: Location) {
    this.params.events = this.getEventsForTheme();

   
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('platform ready');
      this.nativeStorage.get('user_id').then((userID) => {
        console.log('native storage userid:' + userID);
        this.firebase.getToken()
          .then(token => {
            console.log(`The token is ${token}`);

            this.httpService.updateToken(userID, token)
              .subscribe(data => {

              });

          })
          .catch(error => console.error('Error getting token', error));

        this.firebase.onNotification()
          .subscribe(data => console.log(`User opened a notification ${data}`));

        this.firebase.onTokenRefresh()
          .subscribe((token: string) => {
            console.log(`Got a new token ${token}`);
            this.httpService.updateToken(userID, token)
              .subscribe(data => {

              });
          });

      });


    });
  }

  getEventsForTheme = (): any => {
    var that = this
    return {
      onLogin: function (params) {
        that.toastCtrl.showLoader();
        // that.toastCtrl.presentToast('onLogin');
        that.httpService.doLogin(params.username, params.password)
          .subscribe(data => {
            that.toastCtrl.dismissLoader();
            if (data.response) {
              if (data.data.user_login_type == 2) {
                that.nativeStorage.set('loggedin', true);
                that.nativeStorage.set('user_id', data.data.user_id);
                that.initializeApp();
                that.navCtrl.setRoot('MainProductPage');
              } else {
                that.toastCtrl.presentToast('You dont have an access to login, Please contact admin.');
              }

            } else {
              that.toastCtrl.presentToast(data.error);
            }

          });
      },
      onForgot: function () {
        that.toastCtrl.presentToast('onForgot');
      },
      onRegister: function (params) {
        that.toastCtrl.presentToast('onRegister');
      },
      onSkip: function (params) {
        that.toastCtrl.presentToast('onSkip');
      },
      onFacebook: function (params) {
        that.toastCtrl.presentToast('onFacebook');
      },
      onInstagram: function (params) {
        that.toastCtrl.presentToast('onInstagram');
      },
      onTwitter: function (params) {
        that.toastCtrl.presentToast('onTwitter');
      },
      onGoogle: function (params) {
        that.toastCtrl.presentToast('onGoogle');
      },
      onPinterest: function (params) {
        that.toastCtrl.presentToast('onPinterest');
      },
    };
  };

  
  goBack() {
    console.log(" clicked");
    this.location.back();
  }

}
