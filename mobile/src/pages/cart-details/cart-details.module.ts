import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartDetailsPage } from './cart-details';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CartDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CartDetailsPage),
    ComponentsModule
  ],
  exports: [CartDetailsPage]
})
export class CartDetailsPageModule { }
