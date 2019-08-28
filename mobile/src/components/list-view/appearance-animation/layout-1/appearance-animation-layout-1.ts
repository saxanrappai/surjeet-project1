import { GlobalProvider } from './../../../../providers/global/global';
import { Component, Input, ViewChild, OnChanges } from '@angular/core';
import { IonicPage, Content, NavController } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'appearance-animation-layout-1',
    templateUrl: 'appearance-animation.html'
})
export class AppearanceAnimationLayout1 implements OnChanges {
    @Input() data: any;
    @Input() events: any;
    @ViewChild(Content)
    content: Content;
    mainItems = [];
    animateItems = [];
    animateClass: any;

    constructor(public navCtrl: NavController, public global: GlobalProvider) {
        this.animateClass = { 'fade-in-left-item': true };
    }

    onEvent(event: string, item: any, e: any) {
        if (this.events[event]) {
            this.events[event](item);
        }
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

        if (this.events[event]) {
            this.events[event](item);
        }
    }

    ngOnChanges(changes: { [propKey: string]: any }) {
        let that = this;
        that.data = changes['data'].currentValue;
        if (that.data) {
            that.animateItems = [];
            for (let i = 0; i < that.data.length; i++) {
                setTimeout(function () {
                    that.animateItems.push(that.data[i]);
                }, 200 * i);
            }
        }
    }

    search(search?: any) {
        let dataSearch = [];
        this.data.forEach(element => {
            if (element.title.toLowerCase().includes(search.target.value.toLowerCase())) {
                dataSearch.push(element);
            }
        });
        this.animateItems = dataSearch;
    }

    onCancelSearch() {
        this.animateItems = this.data;
    }

}