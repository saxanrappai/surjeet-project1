import { LoginPageModule } from './../login/login.module';
import { LoginPage } from './../login/login';
import { SplashscreenPage } from './../splashscreen/splashscreen';
import { SplashScreenLayout3Module } from './../../components/splash-screen/layout-3/splash-screen-layout-3.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SplashScreenService } from '../../services/splash-screen-service';

@NgModule({
  declarations: [
    SplashscreenPage
  ],
  entryComponents: [LoginPage],
  imports: [
    IonicPageModule.forChild(SplashscreenPage),
    SplashScreenLayout3Module,
    LoginPageModule
  ], providers: [
    SplashScreenService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SplashscreenPageModule { }

