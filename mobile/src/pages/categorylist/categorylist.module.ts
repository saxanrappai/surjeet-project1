import { AppearanceAnimationLayout1Module } from './../../components/list-view/appearance-animation/layout-1/appearance-animation-layout-1.module';
import { AppearanceAnimationLayout1 } from './../../components/list-view/appearance-animation/layout-1/appearance-animation-layout-1';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategorylistPage } from './categorylist';
import { ListViewAppearanceAnimationService } from '../../services/list-view-appearance-animation-service';
import { ToastService } from '../../services/toast-service';

@NgModule({
  declarations: [
    CategorylistPage
  ],
  imports: [
    IonicPageModule.forChild(CategorylistPage)
  ],
  exports: [
    CategorylistPage
  ]

})
export class CategorylistPageModule { }
