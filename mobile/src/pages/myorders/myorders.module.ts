import { ExpandableLayout1Module } from './../../components/list-view/expandable/layout-1/expandable-layout-1.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyordersPage } from './myorders';

@NgModule({
  declarations: [
    MyordersPage,
  ],
  imports: [
    IonicPageModule.forChild(MyordersPage),
    ExpandableLayout1Module
  ],
})
export class MyordersPageModule { }
