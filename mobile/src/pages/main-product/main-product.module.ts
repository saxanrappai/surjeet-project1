import { HttpService } from './../../services/HttpService';
import { ProductpagePage } from './../productpage/productpage';
import { ImageGalleryLayout1 } from './../../components/image-gallery/layout-1/image-gallery-layout-1';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainProductPage } from './main-product';
import { ImageGalleryLayout1Module } from '../../components/image-gallery/layout-1/image-gallery-layout-1.module';
import { ProductpagePageModule } from '../productpage/productpage.module';
import { ListViewExpandableService } from '../../services/list-view-expandable-service';
import { ImageGalleryService } from '../../services/image-gallery-service';
import { ToastService } from '../../services/toast-service'; 
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MainProductPage,  
  ],
  imports: [ 
    IonicPageModule.forChild(MainProductPage),
    ImageGalleryLayout1Module,
    ComponentsModule
  ],
})
export class MainProductPageModule { }
