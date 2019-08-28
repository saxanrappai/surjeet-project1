import { Component, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'google-card-layout-3',
    templateUrl: 'google-card.html'
})
export class GoogleCardLayout3 {
    @Input() data: any;
    @Input() events: any;

    constructor() { }

    onEvent(event: string, item: any, e: any) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    }
}
