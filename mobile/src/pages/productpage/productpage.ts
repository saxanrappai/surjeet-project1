import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../services/HttpService';
import { Observable } from 'rxjs';
import { ToastService } from '../../services/toast-service';
import { GlobalProvider } from '../../providers/global/global';

/**
 * Generated class for the ProductpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  templateUrl: 'productpage.html',
  providers: [ToastService]
})
export class ProductpagePage {
  // products: Observable<any>;
  params: any = {};
  productsList: GetProducts;
  show: boolean = false;
  iconAdd = 'ios-add-outline';
  iconRemove = 'ios-remove-outline';
  title = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastService,
    public global: GlobalProvider) {

    this.params.events = this.getEventsForTheme();

    this.productsList = this.navParams.get('products');
    this.productsList.data.forEach(element => {
      element.increament = '0';
      if (element.unit_value.includes(',')) {
        let qtys = element.unit_value.split(',');
        let qty = 0;
        qtys.forEach(unit => {
          qty = qty + Number(unit);
        });
        element.unit_value_total = String(qty);
      }

      if (element.product_image != '') {
        if (element.product_image.includes("[")) {
          let images = JSON.parse(element.product_image);
          element.displayImage = 'http://lakud.com/uploads/products/' + images[0];
        } else {
          element.displayImage = 'http://lakud.com/uploads/products/' + element.product_image;
        }
      } else {
        element.displayImage = 'assets/images/background/placeholder.jpg';
      }


    });
    this.params.data = this.productsList.data;
    this.show = true;
    this.title = this.productsList.data[0].title;
    console.log('cat list:' + JSON.stringify(this.productsList.data));
    // this.products = this.httpService.getproducts(this.navParams.get('cat_id'));
    // this.products
    //   .subscribe(data => {
    //     this.productsList = data;

    //   });
  }
  getEventsForTheme = (): any => {
    var that = this;
    return {
      'onItemClick': function (item: any) {
        //that.toastCtrl.presentToast('clicked' + JSON.stringify(item));
        that.navCtrl.push("ProductDetailsPage", {
          'product': JSON.stringify(item)
        });
      },
      'onRates': function (index: number) {
        // that.toastCtrl.presentToast("Rates " + (index + 1));
      },
      'onCheckBoxClick': function (item: any) {
        that.toastCtrl.presentToast(item.title);
      },
      'onButtonClick': function (item: any) {
        //that.toastCtrl.presentToast("Continue");
        if (that.global.selectedProducts) {
          that.navCtrl.push('CartDetailsPage');
        } else {
          that.toastCtrl.presentToast('No Items in cart');
        }

      },
      'onButtonAddClick': function (item: any) {
        console.log(JSON.stringify(item));
        that.toastCtrl.presentToast('Added to cart');
        // that.toastCtrl.presentToast("Add" + JSON.stringify(item));
      }
    };
  };

  onEvent(event: string, item: any, e: any) {
    if (this.global.selectedProducts.length > 0) {
      this.navCtrl.push('CartDetailsPage');
    } else {
      this.toastCtrl.presentToast('No Items in cart');
    }
  }

}
