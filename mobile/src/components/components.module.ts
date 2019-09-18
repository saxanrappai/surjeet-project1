import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; 
import { CommonFooterComponent } from './common-footer/common-footer';
@NgModule({
	declarations: [CommonFooterComponent],
	imports: [],
	exports: [CommonFooterComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
