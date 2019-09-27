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
  Content
} from 'ionic-angular';
import {
  GlobalProvider
} from '../../providers/global/global';
import {
  Observable
} from 'rxjs';

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
  data: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastService,
    public httpService: HttpService, private platform: Platform,
    public global: GlobalProvider) {
    console.log('enter');
    this.global.count++;
    this.data = this.navParams.get('data');
    this.global.category_title = this.navParams.get('title');
    console.log('cat data:' , this.data);
    // let events = this.getEventsForTheme();
    this.animateItems = [];
    for (let i = 0; i < this.data.length; i++) {
      let that = this;
      setTimeout(function () {
        // that.animateItems[i] = that.data[i];
        that.animateItems.push(that.data[i]);
      }, 200 * i);
    }

  }

  onitemclick(event: string, item: any, e: any) {


    console.log("item",item);


    if (item.selected == 'inactive' || item.selected == undefined) {
      item.selected = 'active';
 
    } else {
      item.selected = 'inactive';

    }
    /*
    if (item.sub_cat && item.sub_cat.length > 0) {
      
      this.navCtrl.push('CategorylistPage', {
        'title': item.title,
        'data': item.sub_cat
      }); 
      
    } else { 
      this.toastCtrl.showLoader();
      let products = this.httpService.getproducts(item.id);
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
    */
  }
  onEvent(event: string, item: any, e: any) {
    // if (this.events[event]) {
    //   this.events[event](item);
    // }
  }
  onSubItemCLick(subId: any){

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

  search(search ? : any) {
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