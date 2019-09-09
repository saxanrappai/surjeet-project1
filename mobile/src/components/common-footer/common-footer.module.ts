import { NgModule, CUSTOM_ELEMENTS_SCHEMA , Component } from '@angular/core';
import { IonicPageModule } from 'ionic-angular'; 
import { CommonFooterComponent } from './common-footer';

@NgModule({
    declarations: [ 
        CommonFooterComponent
    ],
    imports: [  

    ],
    exports: [  
        CommonFooterComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class CommonfooterModule { }
