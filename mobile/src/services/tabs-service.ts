import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app-settings'
import { LoadingService } from './loading-service'
import { ToastService } from './toast-service';

@Injectable()
export class TabsService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

  getId = (): string => 'tabs';

  getTitle = (): string => 'Tabs';

  getAllThemes = (): Array<any> => {
    return [
      { "title": "Footer tab - text", "theme": "layout1" },
      { "title": "Footer tab - icons", "theme": "layout2" },
      { "title": "Header tab - text", "theme": "layout3" }
    ];
  };

  getDataForTheme = (menuItem: any): Array<any> => {
    return this[
      'getDataFor' +
      menuItem.charAt(0).toUpperCase() +
      menuItem.slice(1)
    ]();
  };

  /** Settings Tabs Footer tab - text  **/

  getDataForTab1 = (): any => {
    return {
      "items": [
        {
          "id": 1,
          "avatar": "assets/images/avatar/10.jpg",
          "title": "Margaret Atwood",
          "time": "15min",
          "data": "November 5, 1955",
          "backgroundImage": "assets/images/background/2.jpg",
          "description": "Break out your soup pot and fix up a batch of this delicious, spicy vegetarian chili today! It's…",
          "like": {
            "icon": "thumbs-up",
            "number": "12",
            "text": "Likes",
            "isActive": true
          },
          "comment": {
            "icon": "ios-chatbubbles",
            "number": "4",
            "text": "Comments",
            "isActive": false
          }
        },
        {
          "id": 2,
          "avatar": "assets/images/avatar/11.jpg",
          "title": "J. K. Rowling",
          "time": "20min",
          "data": "November 5, 1955",
          "backgroundImage": "assets/images/background/3.jpg",
          "description": "My girlfriend brought these granola bars over for a playgroup one morning and ever since…",
          "like": {
            "icon": "thumbs-up",
            "number": "12",
            "text": "Likes",
            "isActive": true
          },
          "comment": {
            "icon": "ios-chatbubbles",
            "number": "4",
            "text": "Comments",
            "isActive": false
          }
        },
        {
          "id": 3,
          "avatar": "assets/images/avatar/12.jpg",
          "title": "James Patterson",
          "time": "25min",
          "data": "November 5, 1975",
          "backgroundImage": "assets/images/background/4.jpg",
          "description": "Spinach, chicken and pasta are smothered in a glorious creamy pesto sauce.",
          "like": {
            "icon": "thumbs-up",
            "number": "12",
            "text": "Likes",
            "isActive": true
          },
          "comment": {
            "icon": "ios-chatbubbles",
            "number": "4",
            "text": "Comments",
            "isActive": false
          }
        },
        {
          "id": 4,
          "avatar": "assets/images/avatar/13.jpg",
          "title": "Stephen King",
          "time": "37min",
          "data": "November 5, 1985",
          "backgroundImage": "assets/images/background/5.jpg",
          "description": "Impress your guests with a pork tenderloin, lightly seasoned and baked, and served with…",
          "like": {
            "icon": "thumbs-up",
            "number": "12",
            "text": "Likes",
            "isActive": true
          },
          "comment": {
            "icon": "ios-chatbubbles",
            "number": "4",
            "text": "Comments",
            "isActive": false
          }
        },
        {
          "id": 5,
          "avatar": "assets/images/avatar/14.jpg",
          "title": "Bella Forrest",
          "time": "40min",
          "data": "November 5, 1995",
          "backgroundImage": "assets/images/background/6.jpg",
          "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus.",
          "like": {
            "icon": "thumbs-up",
            "number": "12",
            "text": "Likes",
            "isActive": true
          },
          "comment": {
            "icon": "ios-chatbubbles",
            "number": "4",
            "text": "Comments",
            "isActive": false
          }
        },
        {
          "id": 6,
          "avatar": "assets/images/avatar/15.jpg",
          "title": "Sarah Moriarty",
          "time": "48min",
          "data": "November 5, 1999",
          "backgroundImage": "assets/images/background/7.jpg",
          "description": "This savory, homemade chicken noodle soup made with chicken broth, egg noodles,…",
          "like": {
            "icon": "thumbs-up",
            "number": "12",
            "text": "Likes",
            "isActive": true
          },
          "comment": {
            "icon": "ios-chatbubbles",
            "number": "4",
            "text": "Comments",
            "isActive": false
          }
        }
      ]
    };
  }

  getDataForTab2 = (): any => {
    return {
      "description": "Description",
      "photo": "Photo",
      "location": "Location",
      "writeReview": "Write Review",
      "iconImage": "ios-image-outline",
      "iconPin": "ios-pin-outline",
      "items": [
      ]
    };
  }

  getDataForTab3 = (): any => {
    return {
      "title": "Your location",
      "map": {
          "lat": 40.712562,
          "lng": -74.005911,
          "zoom": 15,
          "mapTypeControl": true,
          "streetViewControl": true
      }
    };
  }

  getDataForTab4 = (): any => {
    return {
      "header": "List Frends",
      "items": [
        {
          "title": "Ana Guyon",
          "subtitle": "@jacqueline.guyon",
          "avatar": "assets/images/avatar/14.jpg"
        },
        {
          "title": "Alice Vieira",
          "subtitle": "@alice.vieira",
          "avatar": "assets/images/avatar/12.jpg"
        },
        {
          "title": "Marine Aubry",
          "subtitle": "@marine.aubry",
          "avatar": "assets/images/avatar/10.jpg"
        },
        {
          "title": "Ana Rodrigues",
          "subtitle": "@ana.rodrigues",
          "avatar": "assets/images/avatar/9.jpg"
        }
      ]
    };
  }

  getDataForTab5 = (): any => {
    return {
      "header": "List Frends",
      "items": [
        {

          "groupName": "TODAY",
          "items": [
            {
              "id": 1,
              "title": "Iria Mascareñas",
              "image": "assets/images/avatar/10.jpg",
              "time": "5 min ago"
            },
            {
              "id": 2,
              "title": "Isaac Alvarado",
              "image": "assets/images/avatar/11.jpg",
              "time": "15 min ago"
            },
            {
              "id": 3,
              "title": "Joan Alemán",
              "image": "assets/images/avatar/12.jpg",
              "time": "18 min ago"
            },

          ]
        },
        {

          "groupName": "YESTERDAY",
          "items": [
            {
              "id": 1,
              "title": "Iria Mascareñas",
              "image": "assets/images/avatar/13.jpg",
              "time": "1 day ago"
            },
            {
              "id": 2,
              "title": "Isaac Alvarado",
              "image": "assets/images/avatar/14.jpg",
              "time": "1 day ago"
            },
            {
              "id": 3,
              "title": "Joan Alemán",
              "image": "assets/images/avatar/15.jpg",
              "time": "1 day ago"
            },

          ]
        }
      ]
    };
  }

  /** Settings Tabs Footer tab - icons  **/

  getDataForTab6 = (): any => {
    return {
      "items": [
        {
          "title": "Lorem ipsum dolor sit 1",
          "subtitle": "Subtitle",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
          "cardImage": "assets/images/background/1.jpg"
        },
        {
          "title": "Lorem ipsum dolor sit 1",
          "subtitle": "Subtitle",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
          "cardImage": "assets/images/background/2.jpg"
        },
        {
          "title": "Lorem ipsum dolor sit 1",
          "subtitle": "Subtitle",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
          "cardImage": "assets/images/background/3.jpg"
        },
        {
          "title": "Lorem ipsum dolor sit 1",
          "subtitle": "Subtitle",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
          "cardImage": "assets/images/background/4.jpg"
        },
        {
          "title": "Lorem ipsum dolor sit 1",
          "subtitle": "Subtitle",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
          "cardImage": "assets/images/background/6.jpg"
        },
      ]
    };
  }

  getDataForTab7 = (): any => {
    return {
      "items": [
        {
          "title": "Lorem ipsum dolor sit 1",
          "subtitle": "Subtitle",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
          "cardImage": "assets/images/background/7.jpg"
        },
        {
          "title": "Lorem ipsum dolor sit 1",
          "subtitle": "Subtitle",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
          "cardImage": "assets/images/background/8.jpg"
        },
        {
          "title": "Lorem ipsum dolor sit 1",
          "subtitle": "Subtitle",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
          "cardImage": "assets/images/background/9.jpg"
        },
        {
          "title": "Lorem ipsum dolor sit 1",
          "subtitle": "Subtitle",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
          "cardImage": "assets/images/background/3.jpg"
        },
        {
          "title": "Lorem ipsum dolor sit 1",
          "subtitle": "Subtitle",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
          "cardImage": "assets/images/background/2.jpg"
        },
      ]
    };
  }

  getDataForTab8 = (): any => {
    return {
      "headerTitle": "Product",
      "headerImage": "assets/images/background/1.jpg",
      "items": [
        {
          "id": 1,
          "title": "Playgroup Granola Bars",
          "subtitle": "Healthy Recipes",
          "productDescriptions": [
            {
              "id": 1,
              "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
              "id": 2,
              "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          ]
        }
      ]
    };
  }

  getDataForTab9 = (): any => {
    return {
      "title": "Your location",
      "map": {
        "lat": 40.712562,
        "lng": -74.005911,
        "zoom": 15,
        "mapTypeControl": true,
        "streetViewControl": true
      }
    };
  }

  getDataForTab10 = (): any => {
    return {
      "title": "Title",
      "name": "Your Name",
      "description": "Enter a description",
      "button": "Submit"
    };
  }

  /** Settings Tabs Header tab - text  **/

  getDataForTab11 = (): any => {
    return {
      "items": [
        {
          "id": 1,
          "image": "assets/images/background/9.jpg",
          "title": "Pesto Chicken Florentine",
          "description": "Spinach, chicken and pasta are smothered in a glorious creamy pesto sauce.",
          "iconLike": "thumbs-up",
          "iconComment": "ios-chatbubbles",
          "numberLike": "12",
          "numberCommnet": "4",
        },
        {
          "id": 2,
          "image": "assets/images/background/8.jpg",
          "title": "Burgundy Pork Tenderloin",
          "description": "Impress your guests with a pork tenderloin, lightly seasoned and baked, and serve…",
          "iconLike": "thumbs-up",
          "iconComment": "ios-chatbubbles",
          "numberLike": "12",
          "numberCommnet": "4",
        },
        {
          "id": 3,
          "image": "assets/images/background/7.jpg",
          "title": "Oven Roasted Potatoes",
          "description": "Potatoes coated with olive oil and your favorite herbs, and roasted to perfection.",
          "iconLike": "thumbs-up",
          "iconComment": "ios-chatbubbles",
          "numberLike": "12",
          "numberCommnet": "4",
        },
        {
          "id": 4,
          "image": "assets/images/background/6.jpg",
          "title": "Baked French Fries I",
          "description": "Potato wedges baked with olive oil and flavored with the spices of garlic...",
          "iconLike": "thumbs-up",
          "iconComment": "ios-chatbubbles",
          "numberLike": "12",
          "numberCommnet": "4",
        },
      ]
    };
  }

  getDataForTab12 = (): any => {
    return {
      "items": [
        {
          "title": "Fernando Ortíz",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "avatar": "assets/images/avatar/23.jpg"
        },
        {
          "title": "Nia Gutkowski",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "avatar": "assets/images/avatar/24.jpg"
        },
        {
          "title": "Lucas Schultz",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "avatar": "assets/images/avatar/22.jpg"
        },
        {
          "title": "Camila Hintz",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "avatar": "assets/images/avatar/20.jpg"
        },
        {
          "title": "Silvia Correa",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "avatar": "assets/images/avatar/18.jpg"
        },
        {
          "title": "Anna Yost",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "avatar": "assets/images/avatar/16.jpg"
        },
        {
          "title": "Teresa Puga",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "avatar": "assets/images/avatar/14.jpg"
        }
      ]
    };
  }

  getDataForTab13 = (): any => {
    return {
      "map": {
        "lat": 40.712562,
        "lng": -74.005911,
        "zoom": 15,
        "mapTypeControl": true,
        "streetViewControl": true
      }
    };
  }

  getDataForTab14 = (): any => {
    return {
      "items": [
        {
          "title": "Pesto Chicken Florentine",
          "subtitle": "Spinach, chicken and pasta are smothered in a glorious creamy pesto sauce.",
          "avatar": "assets/images/background/2.jpg"
        },
        {
          "title": "Burgundy Pork Tenderloin",
          "subtitle": "Impress your guests with a pork tenderloin, lightly seasoned and baked, and serve…",
          "avatar": "assets/images/background/3.jpg"
        },
        {
          "title": "Oven Roasted Potatoes",
          "subtitle": "Potatoes coated with olive oil and your favorite herbs, and roasted to perfection.",
          "avatar": "assets/images/background/4.jpg"
        },
        {
          "title": "Baked French Fries I",
          "subtitle": "Potato wedges baked with olive oil and flavored with the spices of garlic...",
          "avatar": "assets/images/background/5.jpg"
        }
      ]
    };
  }

  getDataForLayout1 = (): Array<any> => {
    return [];
  };

  getDataForLayout2 = (): Array<any> => {
    return [];
  };

  getDataForLayout3 = (): Array<any> => {
    return [];
  };

  getDataForLayout13 = (): Array<any> => {
    return [];
  };


  getEventsForTheme = (menuItem: any): any => {
    var that = this;
    return {
      'onItemClick': function (item: any) {
        that.toastCtrl.presentToast(item);
      }
    };
  };

  prepareParams = (item: any) => {
    let result = {
      title: item.title,
      data: [],
      events: this.getEventsForTheme(item)
    };
    result[this.getShowItemId(item)] = true;
    return result;
  };

  getShowItemId = (item: any): string => {
    return this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
  };

  load(item: any): Observable<any> {
    var that = this;
    that.loadingService.show();
    if (AppSettings.IS_FIREBASE_ENABLED) {
      return new Observable(observer => {
        this.af
          .object('tab/' + item)
          .valueChanges()
          .subscribe(snapshot => {
            that.loadingService.hide();
            observer.next(snapshot);
            observer.complete();
          }, err => {
            that.loadingService.hide();
            observer.error([]);
            observer.complete();
          });
      });
    } else {
      return new Observable(observer => {
        that.loadingService.hide();
        observer.next(this.getDataForTheme(item));
        observer.complete();
      });
    }
  }
}
