import { Component, Input, ViewChild, OnChanges } from '@angular/core';
import { IonicPage, Content } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'appearance-animation-layout-2',
    templateUrl: 'appearance-animation.html'
})
export class AppearanceAnimationLayout2 implements OnChanges{
    @Input() data: any;
    @Input() events: any;
    @ViewChild(Content)
    content: Content;

    animateItems = [];
    animateClass: any;

    constructor() {
        this.animateClass = { 'fade-in-right-item': true };
    }

    onEvent(event: string, item: any, e: any) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    }

    ngOnChanges(changes: { [propKey: string]: any }) {
        let that = this;
        that.data = changes['data'].currentValue;
        if (that.data && that.data.items) {
            that.animateItems = [];
            for (let i = 0; i < that.data.items.length; i++) {
                setTimeout(function () {
                    that.animateItems.push(that.data.items[i]);
                }, 200 * i);
            }
        }
    }
}
