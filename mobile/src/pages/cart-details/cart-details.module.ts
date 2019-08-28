import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartDetailsPage } from './cart-details';

@NgModule({
  declarations: [
    CartDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CartDetailsPage),
  ],
  exports: [CartDetailsPage]
})
export class CartDetailsPageModule { }
