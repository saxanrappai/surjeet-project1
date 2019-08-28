import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { ImageViewerController } from 'ionic-img-viewer';

@IonicPage()
@Component({
  selector: 'full-screen-gallery',
  templateUrl: 'full-screen-gallery.html'
})
export class FullScreenGallery implements AfterViewInit {
  @Input() data: any;
  @Input() events: any;
  @ViewChild('slider') slider: Slides;
  public isLocked: boolean = false;
  sliderOptions: any;
  pagar: any;
  constructor(public navCtrl: NavController, navParams: NavParams, private imgViewCtrl: ImageViewerController) {
    this.sliderOptions = {
      pager: true
    };
  }

  onEvent = (event: string, item, e): void => {
    if (e) {
      e.stopPropagation();
    }
    if (this.events[event]) {
      this.events[event](item);
    }
  }

  onDoubleClick = (e, slides: Slides): void => {
    this.isLocked = !this.isLocked;
    slides.lockSwipes(this.isLocked);
  }

  ngAfterViewInit() {
    this.sliderOptions = {
      pager: true,
      zoom: true,
      initialSlide: this.data.index
    };
  }

  onImageClick(url: any) {
    const imageViewer = this.imgViewCtrl.create(url);
    imageViewer.present();

  }
}
