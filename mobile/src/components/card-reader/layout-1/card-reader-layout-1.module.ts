import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardReaderLayout1 } from './card-reader-layout-1';

@NgModule({
    declarations: [
        CardReaderLayout1,
    ],
    imports: [
        IonicPageModule.forChild(CardReaderLayout1),
    ],
    exports: [
        CardReaderLayout1
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class CardReaderLayout1Module { }
