import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app-settings';

@Injectable()
export class MenuService implements IService {

  constructor() { }

  getId = (): string => 'menu';

  getTitle = (): string => 'UIAppTemplate';

  getAllThemes = (): Array<any> => {
    return [
      { "title": "Home", "theme": "listViews", "icon": "ios-albums-outline", "listView": true, "component": "", "singlePage": false },
      { "title": "My Orders", "theme": "listViews", "icon": "ios-list-box-outline", "listView": true, "component": "", "singlePage": false },
      { "title": "Logout", "theme": "listViews", "icon": "ios-log-out", "listView": true, "component": "", "singlePage": false }


      // { "title": "List Views", "theme": "listViews", "icon": "ios-list-box-outline", "listView": true, "component": "", "singlePage": false },
      // { "title": "Parallax", "theme": "parallax", "icon": "ios-albums-outline", "listView": false, "component": "", "singlePage": false },
      // { "title": "Login Pages", "theme": "login", "icon": "ios-lock-outline", "listView": false, "component": "", "singlePage": false },
      // { "title": "Register Pages", "theme": "register", "icon": "ios-contact-outline", "listView": false, "component": "", "singlePage": false },
      // { "title": "Image Gallery", "theme": "imageGallery", "icon": "ios-apps-outline", "listView": false, "component": "", "singlePage": false },

    ];
  };

  getDataForTheme = () => {
    return {
      "image": "assets/images/avatar/10.jpg",
      "title": "Profile name"
    };
  };

  getEventsForTheme = (menuItem: any): any => {
    return {};
  };

  prepareParams = (item: any) => {
    return {
      title: item.title,
      data: {},
      events: this.getEventsForTheme(item)
    };
  };

  load(item: any): Observable<any> {
    return new Observable(observer => {
      observer.next(this.getDataForTheme());
      observer.complete();
    });
  }
}
