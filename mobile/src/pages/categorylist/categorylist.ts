import {
  HttpService
} from './../../services/HttpService';
import {
  ToastService
} from './../../services/toast-service';
import {
  ListViewAppearanceAnimationService
} from './../../services/list-view-appearance-animation-service';
 import {
  Component,
  ViewChild
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  Platform,
  Navbar,
  Content
} from 'ionic-angular';
import {
  GlobalProvider
} from '../../providers/global/global';
import {
  Observable
} from 'rxjs';
import { Slides  } from 'ionic-angular';

/**
 * Generated class for the CategorylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category-list',
  templateUrl: 'categorylist.html',
})
export class CategorylistPage {

  @ViewChild(Content)
  content: Content;
  animateItems: any = [];
  animateClass: any;
  productsList: any;
  data: any = [];
  showSubCatUI: boolean = false;
  
  @ViewChild(Slides) slides: Slides;
  /* ------------------------------------------ */
  /* ------------------------------------------ */
  /* ------------------------------------------ */
  @ViewChild(Navbar) navBar: Navbar;
  ionViewDidLoad() {
    this.navBar.backButtonClick = (e:UIEvent)=>{ 
      console.log('backButtonClick ');
      this.navCtrl.setRoot('MainProductPage');
 this.navCtrl.popToRoot();

    }
  }
  /* ------------------------------------------ */
  /* ------------------------------------------ */
  /* ------------------------------------------ */

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastService,
    public httpService: HttpService, private platform: Platform,
    public global: GlobalProvider) {
    console.log('enter');



 


    //this.global.count++;
    this.data = this.navParams.get('data');
    this.global.category_title = this.navParams.get('title');
    //console.log('cat data:', this.data);
    // let events = this.getEventsForTheme();
    this.animateItems = [];
    for (let i = 0; i < this.data.length; i++) {
      let that = this;


      //setTimeout(function () {
      that.animateItems[i] = that.data[i];

      if (that.data[i].sub_cat == undefined) {
       // console.log(">>>>>>>>>>>>> work here >>>>");
        this.showSubCatUI = true;
        setTimeout((i, that) => {
         // console.log(" changes called");
          let products = this.httpService.getproducts(that.data[i].id);
          products
            .subscribe(data => {
              that.data[i].productsList = data.data;






              if (that.data[i].productsList && that.data[i].productsList.length > 0) {

                that.data[i].productsList.forEach(element => {

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

                      element.displayImage = new Array();

                      images.forEach(img => {
                        element.displayImage.push('http://lakud.com/uploads/products/' + img);
                      });
                    } else {
                      element.displayImage = Array('http://lakud.com/uploads/products/' + element.product_image);;
                    }
                  } else {
                    element.displayImage[0] = 'assets/images/background/placeholder.jpg';
                  }
                });
              //  console.log("productsList", that.data[i].productsList);
                that.animateItems[i].productsList = that.data[i].productsList;
              //  console.log("animateItems", that.animateItems);
              } 
            });

        }, 1, i, that); 
      }

      //  }, 200 * i); 
    }

  }
  


  slideChanged() {
    let currentIndex = this.slides.isEnd();
    console.log('Current index is', currentIndex);
  }


  onitemclick(event: string, item: any, e: any) {


    console.log("item", item);

    /*
        if (item.selected == 'inactive' || item.selected == undefined) {
          item.selected = 'active';
     
        } else {
          item.selected = 'inactive';
    
        }
        */
    if (item.sub_cat && item.sub_cat.length > 0) {

      this.navCtrl.push('CategorylistPage', {
        'title': item.title,
        'data': item.sub_cat
      });

    } else {
      if (item.selected == 'inactive' || item.selected == undefined) {

        item.selected = 'active';
        if (item.productsList == undefined) {
          this.toastCtrl.showLoader();
          let products = this.httpService.getproducts(item.id);
          products
            .subscribe(data => {
              item.productsList = data.data;
              console.log("productsList", item.productsList);

              this.toastCtrl.dismissLoader();
              if (item.productsList && item.productsList.length > 0) {

                item.productsList.forEach(element => {

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

                      element.displayImage = new Array();

                      images.forEach(img => {
                        element.displayImage.push('http://lakud.com/uploads/products/' + img);
                      });
                    } else {
                      element.displayImage = Array('http://lakud.com/uploads/products/' + element.product_image);;
                    }
                  } else {
                    element.displayImage = 'assets/images/background/placeholder.jpg';
                  }
                });
                console.log("productsList", this.productsList);
                /*
                this.navCtrl.push('ProductpagePage', {
                  'products': productsList
                });
                */
              } else {
                this.toastCtrl.presentToast('No Products Available');
                item.selected = 'inactive';
              }
            });
        }
      } else {
        item.selected = 'inactive';

      }
    }
  }
  onEvent(event: string, item: any, e: any) {
    // if (this.events[event]) {
    //   this.events[event](item);
    // }
  }
  onSubItemCLick(subId: any) {

    console.log(subId);

    this.toastCtrl.showLoader();
    let products = this.httpService.getproducts(subId);
    products
      .subscribe(data => {
        this.toastCtrl.dismissLoader();
        let productsList = data;

        if (productsList.data && productsList.data.length > 0) {
          this.navCtrl.push('ProductpagePage', {
            'products': productsList
          });
        } else {
          this.toastCtrl.presentToast('No Products Available');
        }
      });
  }
  onClickShowProductCart(paramsData) {

    console.log("paramsData", paramsData);

    this.navCtrl.push("ProductDetailsPage", {
      'product': JSON.stringify(paramsData)
    });
  }
  onItemClick(event: string, item: any, e: any) {
    // let that = this;
    // if (item.sub_cat) {
    //     // this.animateItems = [];
    //     //this.global.category_title = item.title;
    //     // for (let i = 0; i < item.sub_cat.length; i++) {
    //     //     setTimeout(function () {
    //     //         that.animateItems.push(item.sub_cat[i]);
    //     //     }, 200 * i);
    //     // }
    //     that.navCtrl.push('CategorylistPage', {
    //         title: item.title,
    //         data: item.sub_cat
    //     });
    // } else {
    //     that.navCtrl.push('ProductpagePage', {
    //         'cat_id': item.id
    //     });

    // }

    // if (this.events[event]) {
    //   this.events[event](item);
    // }
  }

  // ngOnChanges(changes: { [propKey: string]: any }) {
  //   let that = this;
  //   that.data = changes['data'].currentValue;
  //   if (that.data) {
  //     that.animateItems = [];
  //     for (let i = 0; i < that.data.length; i++) {
  //       setTimeout(function () {
  //         that.animateItems.push(that.data[i]);
  //       }, 200 * i);
  //     }
  //   }
  // }

  search(search?: any) {
    let dataSearch = [];
    if (search.target.value == '') {
      this.animateItems = this.data;
    } else {
      for (let index = 0; index < this.data.length; index++) {
        const element = this.data[index];
        if (element.title.toLowerCase().includes(search.target.value.toLowerCase())) {
          dataSearch.push(element);
        }
        if (index == (this.data.length - 1)) {
          this.animateItems = dataSearch;
        }
      }
    }

    // this.data.forEach(element => {
    //   if (element.title.toLowerCase().includes(search.target.value.toLowerCase())) {
    //     dataSearch.push(element);
    //   }
    // });
    // this.animateItems = dataSearch;
  }

  onCancelSearch() {
    this.animateItems = this.data;
  }

}