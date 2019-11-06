import { ExpandableLayout1Module } from './../../components/list-view/expandable/layout-1/expandable-layout-1.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyordersPage } from './myorders';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MyordersPage,
  ],
  imports: [
    IonicPageModule.forChild(MyordersPage),
    ExpandableLayout1Module,
    ComponentsModule
  ],
})
export class MyordersPageModule { }
