import { Component, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'card-reader-layout-1',
    templateUrl: 'card-reader.html'
})
export class CardReaderLayout1 {
    @Input() data: any;
    @Input() events: any;

    constructor() {
    }

    onEvent(event: string, result: any) {
        if (this.events[event]) {
            this.events[event](result);
        }
    }
}
