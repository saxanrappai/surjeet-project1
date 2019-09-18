import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesSettingsPage } from './pages-settings';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    PagesSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(PagesSettingsPage),
    ComponentsModule
  ],
})
export class PagesSettingsPageModule {}
