import { FCM } from '@ionic-native/fcm';
import { MyordersPage } from './../pages/myorders/myorders';
import { MainProductPage } from './../pages/main-product/main-product';
import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { MenuService } from '../services/menu-service';

import { IService } from '../services/IService';
import { LoginPage } from '../pages/login/login';
import { Storage } from '@ionic/storage';
import { GlobalProvider } from '../providers/global/global';
import { Events } from 'ionic-angular';
import { Network } from '@ionic-native/network';

@Component({
  templateUrl: 'app.html',
  providers: [MenuService]
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;
  selectedProducts: any = [];
  rootPage = "";
  pages: any;
  params: any;
  leftMenuTitle: string;

  constructor(public platform: Platform,
    private statusBar: StatusBar,
    public menu: MenuController,
    private nativeStorage: Storage,
    private globalProvider: GlobalProvider,
    private firebase: FCM,
    private localNotifications: LocalNotifications,
    public events: Events,
    public network: Network,
    private menuService: MenuService) {
    this.initializeApp();

    //Change Color StatusBar
    this.statusBar.backgroundColorByName("white");

    this.pages = menuService.getAllThemes();
    this.leftMenuTitle = menuService.getTitle();


    this.menuService.load(null).subscribe(snapshot => {
      this.params = snapshot;
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('platform ready');
      this.nativeStorage.get('loggedin').then((isLoggedIn) => {
        console.log('native storage:' + isLoggedIn);
        if (isLoggedIn != null && isLoggedIn) {
          this.rootPage = 'MainProductPage';
        } else {
          this.rootPage = 'LoginPage';
        }

      });
/* saxan
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.firebase.getToken()
        .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
        .catch(error => console.error('Error getting token', error));

      this.firebase.onNotification()
        .subscribe(data => {
          console.log(`User opened a notification ${data}`);
          this.localNotifications.schedule([{
            title: data.title,
            text: data.body
          }]);
        });
*/
      this.statusBar.styleDefault();
      localStorage.setItem("mailChimpLocal", "true");
      this.globalProvider.initializeNetworkEvents();

      // Offline event
      this.events.subscribe('network:offline', () => {
        alert('network:offline ==> ' + this.network.type);
      });

      // Online event
      this.events.subscribe('network:online', () => {
        // alert('network:online ==> ' + this.network.type);
      });
    });
  }

  presentProfileModal() {
    //const profileModal = this.modalCtrl.create("IntroPage");
    //profileModal.present();
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    // navigate to the new page if it is not the current page
    console.log('open page:' + JSON.stringify(page));
    if (page.title == 'Logout') {
      this.nativeStorage.set('loggedin', false);
      this.nav.setRoot('LoginPage');
    } else if (page.title == 'My Orders') {
      this.nav.setRoot('MyordersPage');
    } else {
      this.nav.setRoot('MainProductPage');
    }

    // if (page.singlePage) {
    //   this.menu.open();
    //   this.nav.push(this.getPageForOpen(page.theme), {
    //     service: this.getServiceForPage(page.theme),
    //     page: page,
    //     componentName: page.theme
    //   });
    // } else {
    //   console.log('Item pages:' + JSON.stringify(page));
    //   this.nav.setRoot("ItemsPage", {
    //     componentName: page.theme
    //   });
    // }
  }

  getPageForOpen(value: string): any {
    return null;
  }

  getServiceForPage(value: string): IService {
    return null;
  }
}
