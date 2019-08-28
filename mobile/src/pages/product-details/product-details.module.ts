import { FullScreenGalleryModule } from './../../components/full-screen-gallery/full-screen-gallery.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductDetailsPage } from './product-details';

@NgModule({
  declarations: [
    ProductDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductDetailsPage),
    FullScreenGalleryModule
  ],
})
export class ProductDetailsPageModule { }
