import { ExpandableLayout3 } from './../../components/list-view/expandable/layout-3/expandable-layout-3';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductpagePage } from './productpage';
import { ExpandableLayout3Module } from '../../components/list-view/expandable/layout-3/expandable-layout-3.module';
import { ListViewExpandableService } from '../../services/list-view-expandable-service';
import { HttpService } from '../../services/HttpService';

@NgModule({
  declarations: [
    ProductpagePage,
  ],
  imports: [
    IonicPageModule.forChild(ProductpagePage),
    ExpandableLayout3Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductpagePageModule { }
