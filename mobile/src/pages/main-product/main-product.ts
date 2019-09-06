import { FCM } from '@ionic-native/fcm';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './../../services/HttpService';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { ImageGalleryService } from '../../services/image-gallery-service';
import { Observable } from 'rxjs';
import { ToastService } from '../../services/toast-service';
import { Storage } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications';

/**
 * Generated class for the MainProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  templateUrl: 'main-product.html'
})
export class MainProductPage {

  params: any = {};
  productsList: GetCategories;
  show: boolean = false;
  products: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private platform: Platform,
    private nativeStorage: Storage,
    private firebase: FCM,
    private localNotifications: LocalNotifications,
    private toastCtrl: ToastService, private httpService: HttpService) {
    this.toastCtrl.showLoader();
    this.products = this.httpService.getCategories();
    this.products
      .subscribe(data => {
        this.toastCtrl.dismissLoader();
        this.productsList = data;
        this.params.data = this.productsList.data;
        this.params.events = this.getEventsForTheme();
        console.log('cat list:' + JSON.stringify(this.params.data));
        this.show = true;
      });
    this.initializeApp();

  }

  initializeApp() {
 /*
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
          .subscribe(data => {
            console.log(`User opened a notification ${data}`);
            this.localNotifications.schedule([{
              title: data.title,
              text: data.body
            }]);
          });

        this.firebase.onTokenRefresh()
          .subscribe((token: string) => {
            console.log(`Got a new token ${token}`);
            this.httpService.updateToken(userID, token)
              .subscribe(data => {

              });
          });

      });

    });
    */
  }


  getEventsForTheme = (): any => {
    var that = this;
    return {
      'onClick': function (item: any) {
        if (item.sub_cat && item.sub_cat.length > 0) {
          console.log(item.sub_cat);
          that.navCtrl.push('CategorylistPage', {
            'title': item.title,
            'data': item.sub_cat
          });
        } else {
          that.toastCtrl.showLoader();
          let products = that.httpService.getproducts(item.id);
          products
            .subscribe(data => {
              that.toastCtrl.dismissLoader();
              let productsList = data;
              if (productsList.data && productsList.data.length > 0) {
                that.navCtrl.push('ProductpagePage', {
                  'products': productsList
                });
              } else {
                that.toastCtrl.presentToast('No Products Available');
              }
            });

          // that.toastCtrl.presentToast('No Products Available');
        }
      },
      'onFavorite': function (item) {
        item.favorite = !item.favorite;
      },
    };
  };

}
