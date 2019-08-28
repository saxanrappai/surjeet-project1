import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { HomeService } from '../../services/home-service';
import { AppSettings } from '../../services/app-settings';
import { ToastService } from '../../services/toast-service';
import { MenuService } from '../../services/menu-service';
import { SplashScreenService } from '../../services/splash-screen-service';
import { ListViewExpandableService } from '../../services/list-view-expandable-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeService]
})
export class HomePage {

  data: any = {};
  params: any = {};

  constructor(public navCtrl: NavController,
    public menuservice: MenuService,
    public listviewexpandableservice: ListViewExpandableService,
    public splashscreenservice: SplashScreenService,
    public service: HomeService, public modalCtrl: ModalController, private toastCtrl: ToastService) {
    service.load().subscribe(snapshot => {
      this.data = snapshot;
    });

    if (AppSettings.SHOW_START_WIZARD) {
      this.presentProfileModal();
    }
    let pages = this.menuservice.getAllThemes();
    let page = pages[5];
    console.log(JSON.stringify(page));
    this.params = this.splashscreenservice.prepareParams(page, navCtrl);
    this.params.data = this.splashscreenservice.getDataForLayout3();
    // this.splashscreenservice.load(page).subscribe(snapshot => {
    //   console.log(JSON.stringify(snapshot));
    //   this.params.data = snapshot;
    // });
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
