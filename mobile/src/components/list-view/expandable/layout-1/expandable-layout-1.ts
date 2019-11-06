import {
  Component,
  Input,
  ViewChild
} from '@angular/core';
import {
  IonicPage,
  Content
} from 'ionic-angular';

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

  constructor() {




  }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    console.log("==================", this.data);

if(this.data != '' && this.data.length>0){

    this.data.forEach(element => {

      if (element.product_image != undefined && element.product_image != '') {
        if (element.product_image.includes("[")) {
          let images = JSON.parse(element.product_image);

       //   console.log("images >>>> ", images);
          element.displayImage = new Array();

          images.forEach(img => {
       //     console.log("img >>>> ",JSON.parse( img));
            var i = JSON.parse( img);
            
            JSON.parse( img).forEach(iii => {
            element.displayImage.push('http://lakud.com/uploads/products/' + iii);
          });
          });
        } else {
          element.displayImage = Array('http://lakud.com/uploads/products/' + element.product_image);;
        }
      } else {
        element.displayImage[0] = 'assets/images/background/placeholder.jpg';
      }



      console.log("element >>>> ", element);
    });

}
  }
  onEvent(event: string, item: any, e: any) {
    console.log(event)
    if (this.events[event]) {
      this.events[event](item);
    }
  }

  displayImage(driverDetails: any) {
    if (driverDetails.length > 0) {
      return 'http://lakud.com//uploads/profile/' + driverDetails[0].driver_image;
    } else {
      return 'http://lakud.com//uploads/profile/driver.png';
    }
  }

  toggleGroup(group: any) {
    group.show = !group.show;
  }

  isGroupShown(group: any) {
    return group.show;
  }
}