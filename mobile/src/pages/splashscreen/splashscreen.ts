import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { HomeService } from '../../services/home-service';
import { AppSettings } from '../../services/app-settings';
import { ToastService } from '../../services/toast-service';
import { MenuService } from '../../services/menu-service';
import { SplashScreenService } from '../../services/splash-screen-service';

@IonicPage()
@Component({
  selector: 'page-splashscreen',
  templateUrl: 'splashscreen.html'
})
export class SplashscreenPage {

  data: any = {};
  params: any = {};

  constructor(public navCtrl: NavController,
    public menuservice: MenuService,
    public splashscreenservice: SplashScreenService,
    public modalCtrl: ModalController, private toastCtrl: ToastService) {

    if (AppSettings.SHOW_START_WIZARD) {
      this.presentProfileModal();
    }
    //    let pages = this.menuservice.getAllThemes();
    let page = { "title": "Splash Screen", "theme": "splashScreens", "icon": "ios-exit-outline", "listView": false, "component": "", "singlePage": false };
    console.log(JSON.stringify(page));
    this.params = this.splashscreenservice.prepareParams(page, navCtrl);
    this.params.data = this.splashscreenservice.getDataForLayout3();
  }

  presentProfileModal() {
    const profileModal = this.modalCtrl.create("IntroPage");
    profileModal.present();
  }

  onItemClick(item: any, event) {
    if (item) {
      this.toastCtrl.presentToast(item.title);
    }
  }

  openDashboard(item: any) {
    console.log('came to dashboard');
  }
}

