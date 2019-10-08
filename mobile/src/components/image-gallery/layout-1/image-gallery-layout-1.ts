import { ProductpagePage } from './../../../pages/productpage/productpage';
import { Component, Input, OnChanges, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'image-gallery-layout-1',
  templateUrl: 'image-gallery-layout-1.html'
})
export class ImageGalleryLayout1 implements OnChanges, AfterViewInit {
  @Input() data: any;
  @Input() events: any;

  public selectedItem = 0;
  public selectedItemPage = "0";
  public title: String
  public items = [];
  display_image = 'assets/images/background/placeholder.jpg';

  constructor(public navCtrl: NavController, navParams: NavParams) {

  }

  openSubGallery = (group: any, title: any): any => {
    console.log(JSON.stringify(group));
    this.navCtrl.push('CategorylistPage', {
      title: title,
      data: group
    });
  }

  changeDataSet(tab) {
    if (this.data && this.data[tab]) {
      this.selectedItem = tab;
      this.selectedItemPage = tab;
      this.title = this.data[tab].title;
      if (this.data[tab].sub_cat) {
        this.items = this.data[tab].sub_cat;
        console.log('on s:' + this.items);
      }

    } else {
      this.items = [];
    }
  }

  ngOnChanges(changes: { [propKey: string]: any }) {
    console.log('cu data:' + JSON.stringify(this.data.sub_cat));
    this.data = changes['data'].currentValue;
    this.items = this.data[0].sub_cat;
    this.title = this.data[0].title;
    this.display_image = (this.data[0].image == '') ? 'assets/images/background/placeholder.jpg' : 'http://lakud.com/uploads/category/' + this.data[0].image;
    // this.changeDataSet(this.selectedItem);
  }

  ngAfterViewInit() {
    // this.changeDataSet(this.selectedItem);
  }

  onEvent = (event: string, item, e): void => {
    if (e) {
      e.stopPropagation();
    }
    if (this.events[event]) {
      this.events[event](item);
    }
  }
}
