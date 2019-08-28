import { SplashscreenPage } from './../splashscreen/splashscreen';
import { SplashScreenLayout3Module } from './../../components/splash-screen/layout-3/splash-screen-layout-3.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SplashScreenService } from '../../services/splash-screen-service';
import { SplashscreenPageModule } from '../splashscreen/splashscreen.module';
import { ListViewExpandableService } from '../../services/list-view-expandable-service';

@NgModule({
    declarations: [
        HomePage,
    ],
    entryComponents: [SplashscreenPage],
    imports: [
        IonicPageModule.forChild(HomePage),
        SplashScreenLayout3Module

    ], providers: [ListViewExpandableService,
        SplashScreenService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class HomePageModule { }
