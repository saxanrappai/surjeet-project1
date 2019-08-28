import { ToastService } from './../../services/toast-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from './../../services/HttpService';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainProductPage } from '../main-product/main-product';
import { Observable } from 'rxjs';
import { GlobalProvider } from '../../providers/global/global';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the CartDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  templateUrl: 'cart-details.html',
  providers: [HttpService, ToastService]
})
export class CartDetailsPage {
  products: Observable<any>;
  cartJsoon = {};
  data: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toastCtrl: ToastService,
    private storage: Storage,
    private global: GlobalProvider,
    private httpService: HttpService) {
    this.data = this.global.selectedProducts;
    this.data.forEach(element => {
      let fullShowText = element.title;
      let arraySizes = element.size.split(",");
      let arrayUnits = element.unit_value.split(",");
      let totalInc = element.increament;

      for (let index = (arraySizes.length); index >= 0; index--) {
        let finalLen = 0;
        if (arrayUnits[index] != undefined) {
          if (arrayUnits[index] >= totalInc) {
            finalLen = arrayUnits[index] - totalInc;
            totalInc = finalLen;
            console.log('1:' + totalInc);
            fullShowText = fullShowText + " <li> " + ((arraySizes[index] != '' && arraySizes[index] != undefined) ? arraySizes[index] : '0') + "-" + (-(totalInc - arrayUnits[index])) + "</li>";
            break;
          } else {
            finalLen = totalInc - arrayUnits[index];
            totalInc = finalLen;
            console.log('2:' + totalInc);
            fullShowText = fullShowText + " <li> " + ((arraySizes[index] != '' && arraySizes[index] != undefined) ? arraySizes[index] : '0') + "-" + (finalLen - (totalInc - arrayUnits[index])) + "</li>";

          }

        }
      }
      element.fullText = fullShowText;
    });

    // this.global.selectedProducts.forEach(element => {
    //   this.cartJsoon[element.product_id] = element.increament;
    // });

    // this.toastCtrl.showLoader();
    // this.storage.get('user_id').then((userID) => {
    //   this.httpService.getUserData(userID).subscribe(data => {
    //     if (data.data.user_status != '0') {
    //       this.storage.get('user_id').then((user_id) => {
    //         this.products = this.httpService.check_order(this.cartJsoon, user_id);
    //         this.products
    //           .subscribe(data => {
    //             //this.global.selectedProducts = [];
    //             this.toastCtrl.dismissLoader();
    //             console.log('cat list:' + JSON.stringify(data));
    //             // this.toastCtrl.presentToast("Order Placed Successfully");
    //             // this.navCtrl.setRoot(MainProductPage);
    //             let items = (data.items.replace('\\', ''));
    //             console.log(items);
    //             let list = JSON.parse(items);
    //             console.log(list);
    //             let productItems: string[] = [];
    //             let pIds: string[] = [];
    //             let pNames: string[] = [];
    //             for (let keys in list) {
    //               let s = keys;
    //               let m = '';
    //               for (let k in list[keys]) {
    //                 if (m != '') {
    //                   m = m + ' & ';
    //                 }
    //                 m = m + " " + k + " - " + list[keys][k];
    //               }
    //               // s = s + " :: " + m;
    //               productItems.push(m);
    //               pIds.push(keys);
    //               pNames.push()
    //             }
    //             console.log(JSON.stringify(productItems));


    //           });
    //       });

    //     } else {
    //       this.toastCtrl.dismissLoader();
    //       this.toastCtrl.presentToast("Store is inactive, Please Contact admin.");
    //     }
    //   });
    // });


    // console.log(this.data);
  }

  onEvent(event: string, item: any, e: any) {
    if (e) {
      e.stopPropagation();
    }

    this.global.selectedProducts.forEach(element => {
      this.cartJsoon[element.product_id] = element.increament;
    });

    this.toastCtrl.showLoader();
    this.storage.get('user_id').then((userID) => {
      this.httpService.getUserData(userID).subscribe(data => {
        if (data.data.user_status != '0') {
          this.storage.get('user_id').then((user_id) => {
            this.products = this.httpService.send_order(this.cartJsoon, user_id);
            this.products
              .subscribe(data => {
                this.global.selectedProducts = [];
                this.toastCtrl.dismissLoader();
                console.log('cat list:' + JSON.stringify(data));
                this.toastCtrl.presentToast("Order Placed Successfully");
                this.navCtrl.setRoot(MainProductPage);
              });
          });

        } else {
          this.toastCtrl.dismissLoader();
          this.toastCtrl.presentToast("Store is inactive, Please Contact admin.");
        }
      });
    });

  }

  goBack() {
    this.navCtrl.pop();
  }
  deleteFromCart(id: string) {
    for (let index = 0; index < this.global.selectedProducts.length; index++) {
      const element = this.global.selectedProducts[index];
      if (element.product_id == id) {
        this.global.selectedProducts.splice(index, 1);
      }
    }
  }
}
