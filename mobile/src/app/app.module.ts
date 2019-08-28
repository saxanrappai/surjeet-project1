import { LocalNotifications } from '@ionic-native/local-notifications';
import { CategorylistPage } from './../pages/categorylist/categorylist';
import { ProductpagePageModule } from './../pages/productpage/productpage.module';
import { LoginPageModule } from './../pages/login/login.module';
import { SplashscreenPageModule } from './../pages/splashscreen/splashscreen.module';
import { HomePage } from './../pages/home/home';
import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppSettings } from '../services/app-settings'
import { ToastService } from '../services/toast-service'
import { LoadingService } from '../services/loading-service'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { CardIO } from '@ionic-native/card-io';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { SplashscreenPage } from '../pages/splashscreen/splashscreen';
import { MainProductPageModule } from '../pages/main-product/main-product.module';
import { ListViewExpandableService } from '../services/list-view-expandable-service';
import { HttpModule } from '@angular/http';
import { GlobalProvider } from '../providers/global/global';
import * as ionicGalleryModal from 'ionic-gallery-modal';
import { CategorylistPageModule } from '../pages/categorylist/categorylist.module';
import { HttpService } from '../services/HttpService';
import { NativeStorage } from '@ionic-native/native-storage';
import { FCM } from '@ionic-native/fcm';
import { IonicStorageModule } from '@ionic/storage';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { Network } from '@ionic-native/network';

@NgModule({
  declarations: [
    MyApp],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    ionicGalleryModal.GalleryModalModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(AppSettings.FIREBASE_CONFIG),
    AngularFirestoreModule,
    IonicImageViewerModule
    // AngularFireDatabaseModule, AngularFireAuthModule, AngularFirestoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    StatusBar, SplashScreen, BarcodeScanner, CardIO,
    ToastService, LoadingService, GoogleAnalytics,
    HttpService,
    NativeStorage,
    FCM,
    LocalNotifications,
    Network,
    Camera,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: ionicGalleryModal.GalleryModalHammerConfig
    },
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GlobalProvider]
})
export class AppModule {
}
