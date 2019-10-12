import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesSearchPage } from './pages-search';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    PagesSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(PagesSearchPage),
    ComponentsModule,
  ],
})
export class PagesSearchPageModule {}
