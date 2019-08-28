import { Storage } from '@ionic/storage';
import { ToastService } from './../../services/toast-service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ListViewExpandableService } from './../../services/list-view-expandable-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../services/HttpService';
import { Observable } from 'rxjs';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { FCM } from '@ionic-native/fcm';

/**
 * Generated class for the MyordersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  templateUrl: 'myorders.html',
  providers: [HttpService]
})
export class MyordersPage {

  products: Observable<any>;
  cancelOrder: Observable<any>;
  params: any = {};
  productsList: GetOrderList;
  show: boolean = false;
  iconAdd = 'ios-add-outline';
  iconRemove = 'ios-remove-outline';

  title = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toastCtrl: ToastService,
    private storage: Storage,
    private localNotifications: LocalNotifications,
    private firebase: FCM,
    private httpService: HttpService) {
    this.params.events = this.getEventsForTheme();
    this.toastCtrl.showLoader();
    this.storage.get('user_id').then((userID) => {
      this.products = this.httpService.getOrderList(userID);
      this.products
        .subscribe(data => {
          this.productsList = data;
          console.log(this.productsList);
          let count = 0;
          this.productsList.today_orders.forEach(element => {
            let items = JSON.parse(element.items);
            if (items.length > 0) {
              let list = JSON.parse(items[0]);
              console.log(items);
              let productItems: string[] = [];
              let pIds: string[] = [];
              let pNames: string[] = [];
              for (let keys in list) {
                let s = keys;
                let m = '';
                for (let k in list[keys]) {
                  if (m != '') {
                    m = m + ' & ';
                  }
                  m = m + " " + k + " - " + list[keys][k];
                }
                // s = s + " :: " + m;
                productItems.push(m);
                pIds.push(keys);
                pNames.push()
              }
              this.productsList.today_orders[count].pTitles = JSON.parse(element.product_title);
              this.productsList.today_orders[count].pids = pIds;
              this.productsList.today_orders[count].product_list = productItems;
            } else {
              this.productsList.today_orders[count].pTitles = JSON.parse(element.product_title);
              this.productsList.today_orders[count].pids = [];
              this.productsList.today_orders[count].product_list = [];
            }



            // this.productsList.today_orders[count].category_title = category;
            // this.productItems = [];
            count++;
          });
          // console.log(this.productItems);
          this.params.data = this.productsList.today_orders;
          this.show = true;
          this.toastCtrl.dismissLoader();
        });
    });

  }

  ionViewWillEnter() {
    // Okay, so the platform is ready and our plugins are available.
    // Here you can do any higher level native things you might need.

    this.firebase.onNotification()
      .subscribe(data => {
        console.log(`User opened a notification ${data}`);
        this.toastCtrl.showLoader();
        this.storage.get('user_id').then((userID) => {
          this.products = this.httpService.getOrderList(userID);
          this.products
            .subscribe(data => {
              this.productsList = data;
              console.log(this.productsList);
              let count = 0;
              this.productsList.today_orders.forEach(element => {
                let items = JSON.parse(element.items);
                if (items.length > 0) {
                  let list = JSON.parse(items[0]);
                  console.log(items);
                  let productItems: string[] = [];
                  let pIds: string[] = [];
                  let pNames: string[] = [];
                  for (let keys in list) {
                    let s = keys;
                    let m = '';
                    for (let k in list[keys]) {
                      if (m != '') {
                        m = m + ' & ';
                      }
                      m = m + " " + k + " - " + list[keys][k];
                    }
                    // s = s + " :: " + m;
                    productItems.push(m);
                    pIds.push(keys);
                    pNames.push()
                  }
                  this.productsList.today_orders[count].pTitles = JSON.parse(element.product_title);
                  this.productsList.today_orders[count].pids = pIds;
                  this.productsList.today_orders[count].product_list = productItems;
                } else {
                  this.productsList.today_orders[count].pTitles = JSON.parse(element.product_title);
                  this.productsList.today_orders[count].pids = [];
                  this.productsList.today_orders[count].product_list = [];
                }



                // this.productsList.today_orders[count].category_title = category;
                // this.productItems = [];
                count++;
              });
              // console.log(this.productItems);
              this.params.data = this.productsList.today_orders;
              this.show = true;
              this.toastCtrl.dismissLoader();
            });
        });
      });

  }

  getEventsForTheme = (): any => {
    var that = this;
    return {
      'onItemClick': function (item: any) {
        this.storage.get('user_id').then((userID) => {
          that.cancelOrder = that.httpService.cancelOrder(item.sale_id, userID);
          that.cancelOrder
            .subscribe(data => {
              item.status = 3;
              console.log(JSON.stringify(data));
            });
        });
      }
    };
  };

}
