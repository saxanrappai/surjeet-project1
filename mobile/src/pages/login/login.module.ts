import { MainProductPageModule } from './../main-product/main-product.module';
import { MainProductPage } from './../main-product/main-product';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { LoginLayout2Module } from '../../components/login/layout-2/login-layout-2.module';

@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    LoginLayout2Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginPageModule { }
