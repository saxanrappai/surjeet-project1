import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntroPage } from './intro-page';

@NgModule({
    declarations: [
        IntroPage,
    ],
    imports: [
        IonicPageModule.forChild(IntroPage)
    ],
    exports: [
        IntroPage
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class IntroPageModule { }
