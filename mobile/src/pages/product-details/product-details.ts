import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController, Platform, Alert } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { GalleryModal } from 'ionic-gallery-modal';
import { ToastService } from '../../services/toast-service';

/**
 * Generated class for the ProductDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {

  params: any = {};
  product: any;
  iconAdd = 'ios-add-outline';
  iconRemove = 'ios-remove-outline';
  show: boolean = false;
  unitValue: any = '0';
  sizeChart: string = '';
  images: any = [];
  imHolders: any = [];
  // imHolders: any = [];
  imArray: any = [];
  modal: any;
  alert: Alert;

  constructor(public navCtrl: NavController, public navParams: NavParams, public global: GlobalProvider,
    private modalCtrl: ModalController,
    private toastCtrl: ToastService,
    public platform: Platform,
    private alertCtrl: AlertController) {
    this.product = JSON.parse(this.navParams.get('product'));
    console.log(this.product);
    let array = JSON.parse("[" + this.product.unit_value + "]");
    let arraySizes = this.product.size.split(",");
    let arrayUnits = this.product.unit_value.split(",");

    for (let index = 0; index < arraySizes.length; index++) {
      const element = arraySizes[index];
      this.sizeChart = this.sizeChart + " <li> " + element + " - " + ((arrayUnits[index] != '' && arrayUnits[index] != undefined) ? arrayUnits[index] : '0') + "</li>";
    }

    array.forEach(element => {
      if (element != '0') {
        this.show = true;
        this.unitValue = this.unitValue + element;
      }
    });
    if (this.product.product_image != '') {
      if (this.product.product_image.includes("[")) {
        this.images = JSON.parse(this.product.product_image);
        for (let index = 0; index < this.images.length; index++) {
          const element = this.images[index];
          if (element != null) {
            let im = { url: 'http://lakud.com/uploads/products/' + element, type: 'jpg' };
            this.imArray.push(im);
          }
          if (index == (this.images.length - 1)) {
            this.params.data = this.imArray;
          }

        }
        // this.images.forEach(element => {
        //   let im = { url: 'http://lakud.com/uploads/products/' + element, type: 'jpg' };
        //   this.imArray.push(im);
        // });
      } else {
        let im = { url: 'http://lakud.com/uploads/products/' + this.product.product_image, type: 'jpg' };
        this.imArray.push(im);
        this.params.data = this.imArray;
      }
    } else {
      let im = { url: 'assets/images/background/placeholder.jpg', type: 'jpg' };
      this.imArray.push(im);
      this.params.data = this.imArray;
    }



    // this.platform.registerBackButtonAction(() => {
    //   if (this.alertCtrl != null) {
    //     this.alert.dismiss();
    //   }
    // });


  }

  // openZoom() {
  //   this.modal = this.modalCtrl.create(GalleryModal, {
  //     photos: this.imArray,
  //     initialSlide: 0,
  //   });
  //   this.modal.present();
  // }

  onIncrement(group: any, e) {
    if (e) {
      // event.preventDefault();
      e.stopPropagation();
    }
    if (group.increament < this.unitValue) {
      group.increament++
    }
  }

  onDecrement(group: any, e) {
    if (e) {
      e.stopPropagation()
    }
    if (group.increament > 0) {
      group.increament--
    }
  }

  addtoCart() {
    if (this.product.increament > 0) {
      let isThere = false;
      if (this.global.selectedProducts.length == 0) {
        this.global.selectedProducts.push(this.product);
        console.log(this.product.product_id + "---" + this.product.increament);
      } else {
        for (let index = 0; index < this.global.selectedProducts.length; index++) {
          const element = this.global.selectedProducts[index];

          if (element.product_id == this.product.product_id) {
            isThere = true;
            element.increament = + this.product.increament;
          }
          if (index == (this.global.selectedProducts.length - 1)) {
            if (isThere == false) {
              this.global.selectedProducts.push(this.product);
            }
          }
        }
      }

      // this.global.selectedProducts.forEach(element => {
      //   if (element.product_id == this.product.id) {
      //     element.increament = element.increament + this.product.increament;
      //   }
      // });
      // this.global.selectedProducts.push(this.product);
      console.log(this.global.selectedProducts);
      this.navCtrl.pop();
      this.navCtrl.push('CartDetailsPage');
      // this.toastCtrl.presentToast('Added to cart');
    }
  }

  showSizeChart(): void {
    this.alert = this.alertCtrl.create({
      title: this.product.product_name,
      message: this.sizeChart,
      cssClass: "info-dialog",
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Ok clicked');
          }
        }
      ]
    });
    this.alert.present();
  }

  ionViewWillLeave() {
    if (this.modal != null) {
      this.modal.dismiss();
    }
  }
}
