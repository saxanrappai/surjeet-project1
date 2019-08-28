import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, Content } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'expandable-layout-1',
  templateUrl: 'expandable.html'
})
export class ExpandableLayout1 {
  @Input() data: any;
  @Input() events: any;
  @ViewChild(Content)
  content: Content;

  constructor() { }

  onEvent(event: string, item: any, e: any) {
    console.log(event)
    if (this.events[event]) {
      this.events[event](item);
    }
  }

  displayImage(driverDetails: any) {
    if (driverDetails.length > 0) {
      return 'http://myshop.guidersmap.com//uploads/profile/' + driverDetails[0].driver_image;
    } else {
      return 'http://myshop.guidersmap.com//uploads/profile/driver.png';
    }
  }

  toggleGroup(group: any) {
    group.show = !group.show;
  }

  isGroupShown(group: any) {
    return group.show;
  }
}
