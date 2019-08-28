import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app-settings'
import { ToastService } from './toast-service'
import { LoadingService } from './loading-service'

@Injectable()
export class ListViewGoogleCardsService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getId = (): string => 'googleCards';

    getTitle = (): string => 'Google Cards';

    getAllThemes = (): Array<any> => {
        return [
          {"title" : "Full image cards", "theme"  : "layout1"},
          {"title" : "Styled cards 2", "theme"  : "layout2"},
          {"title" : "Styled cards", "theme"  : "layout3"},
          {"title" : "Review cards", "theme"  : "layout4"}
        ];
    };

    // GOOGLE CARD - Full image cards data
    getDataForLayout1 = (): any => {
        return {
            "items": [
                {
                    "id": 1,
                    "avatar": "assets/images/avatar/10.jpg",
                    "data": "November 5, 2017",
                    "title": "Free Ride",
                    "time" : "15min",
                    "backgroundImage": "assets/images/background/1.jpg",
                    "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus.",
                    "like": {
                        "icon":"thumbs-up",
                        "number": "12",
                        "text": "Likes",
                        "isActive": true
                    },
                    "comment": {
                        "icon":"ios-chatbubbles",
                        "number": "4",
                        "text": "Comments",
                        "isActive": false
                    }
                },
                {
                    "id": 2,
                    "avatar": "assets/images/avatar/11.jpg",
                    "data": "November 5, 2017",
                    "title": "Bridge Tour",
                    "time" : "18min",
                    "backgroundImage": "assets/images/background/2.jpg",
                    "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus.",
                    "like": {
                        "icon":"thumbs-up",
                        "number": "12",
                        "text": "Likes",
                        "isActive": false
                    },
                    "comment": {
                        "icon":"ios-chatbubbles",
                        "number": "4",
                        "text": "Comments",
                        "isActive": true
                    }
                },
                {
                    "id": 3,
                    "avatar": "assets/images/avatar/12.jpg",
                    "data": "November 5, 2017",
                    "title": "Sea Tour",
                    "time" : "20min",
                    "backgroundImage": "assets/images/background/3.jpg",
                    "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus.",
                    "like": {
                        "icon":"thumbs-up",
                        "number": "12",
                        "text": "Likes",
                        "isActive": false
                    },
                    "comment": {
                        "icon":"ios-chatbubbles",
                        "number": "4",
                        "text": "Comments",
                        "isActive": false
                    }
                },
                {
                    "id": 4,
                    "avatar": "assets/images/avatar/13.jpg",
                    "data": "November 5, 2017",
                    "title": "Main Stage Event",
                    "time" : "21min",
                    "backgroundImage": "assets/images/background/4.jpg",
                    "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus.",
                    "like": {
                        "icon":"thumbs-up",
                        "number": "12",
                        "text": "Likes",
                        "isActive": false
                    },
                    "comment": {
                        "icon":"ios-chatbubbles",
                        "number": "4",
                        "text": "Comments",
                        "isActive": false
                    }
                },
                {
                    "id": 5,
                    "avatar": "assets/images/avatar/14.jpg",
                    "data": "November 5, 2017",
                    "title": "Classic Open Air",
                    "time" : "29min",
                    "backgroundImage": "assets/images/background/5.jpg",
                    "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus.",
                    "like": {
                        "icon":"thumbs-up",
                        "number": "12",
                        "text": "Likes",
                        "isActive": false
                    },
                    "comment": {
                        "icon":"ios-chatbubbles",
                        "number": "4",
                        "text": "Comments",
                        "isActive": false
                    }
                },
                {
                    "id": 6,
                    "avatar": "assets/images/avatar/16.jpg",
                    "data": "November 5, 2017",
                    "title": "Open Air Concerts",
                    "time" : "34min",
                    "backgroundImage": "assets/images/background/7.jpg",
                    "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus..",
                    "like": {
                        "icon":"thumbs-up",
                        "number": "12",
                        "text": "Likes",
                        "isActive": false
                    },
                    "comment": {
                        "icon":"ios-chatbubbles",
                        "number": "4",
                        "text": "Comments",
                        "isActive": false
                    }
                }
            ]
        };
    };

    // GOOGLE CARD - Styled cards 2 data
    getDataForLayout2 = (): any => {
        return {
            "items": [
                {
                    "id": 1,
                    "image": "assets/images/background/9.jpg",
                    "title": "Greek Farro Salad",
                    "subtitle": "Healthy Lunches",
                },
                {
                  "id": 2,
                  "image": "assets/images/background/8.jpg",
                  "title": "Veggie Bulgur Salad",
                  "subtitle": "Healthy Lunches",
                },
                {
                  "id": 3,
                  "image": "assets/images/background/7.jpg",
                  "title": "California Melt",
                  "subtitle": "Healthy Lunches",
                },
                {
                  "id": 4,
                  "image": "assets/images/background/6.jpg",
                  "title": "Turkey Veggie Meatloaf",
                  "subtitle": "Healthy Lunches",
                },
                {
                  "id": 4,
                  "image": "assets/images/background/5.jpg",
                  "title": "Summer Corn Salad",
                  "subtitle": "Healthy Lunches",
                }
            ]
        };
    };

    // GOOGLE CARD - Styled cards data
    getDataForLayout3 = (): any => {
        return {
            "items": [
                {
                    "id": 1,
                    "category": "best offer",
                    "image": "assets/images/background/11.jpg",
                    "title": "Free Ride Tour",
                    "like": {
                        "icon":"thumbs-up",
                        "number": "12",
                        "isActive": true
                    },
                    "comment": {
                        "icon":"ios-chatbubbles",
                        "number": "4",
                        "isActive": false
                    }
                },
                {
                    "id": 2,
                    "category": "main event",
                    "image": "assets/images/background/10.jpg",
                    "title": "Open Air Concert",
                    "like": {
                        "icon":"thumbs-up",
                        "number": "12",
                        "isActive": false
                    },
                    "comment": {
                        "icon":"ios-chatbubbles",
                        "number": "4",
                        "isActive": true
                    }
                },
                {
                    "id": 3,
                    "category": "Best Tourt",
                    "image": "assets/images/background/9.jpg",
                    "title": "Sea ture",
                    "like": {
                        "icon":"thumbs-up",
                        "number": "12",
                        "isActive": false
                    },
                    "comment": {
                        "icon":"ios-chatbubbles",
                        "number": "4",
                        "isActive": false
                    }
                },
                {
                    "id": 4,
                    "category": "Mountain",
                    "image": "assets/images/background/7.jpg",
                    "title": "Mountain Trout",
                    "like": {
                        "icon":"thumbs-up",
                        "number": "12",
                        "isActive": false
                    },
                    "comment": {
                        "icon":"ios-chatbubbles",
                        "number": "4",
                        "isActive": false
                    }
                },
                {
                    "id": 5,
                    "category": "Bridge Tour",
                    "image": "assets/images/background/5.jpg",
                    "title": "Bridge Tour",
                    "like": {
                        "icon":"thumbs-up",
                        "number": "12",
                        "isActive": false
                    },
                    "comment": {
                        "icon":"ios-chatbubbles",
                        "number": "4",
                        "isActive": false
                    }
                },
                {
                    "id": 6,
                    "category": "best events",
                    "image": "assets/images/background/2.jpg",
                    "title": "Main Stage Event",
                    "like": {
                        "icon":"thumbs-up",
                        "number": "12",
                        "isActive": false
                    },
                    "comment": {
                        "icon":"ios-chatbubbles",
                        "number": "4",
                        "isActive": false
                    }
                }
            ]
        };
    };

    // GOOGLE CARD - Styled cards data
    getDataForLayout4 = (): any => {
        return {
            "items": [
                {
                    "id": 1,
                    "image": "assets/images/background/11.jpg",
                    "time": "MARCH 14, 2017",
                    "title": "Free Ride Tour",
                    "description": "Use these simple tricks to pack more nutrition into every meal!",
                    "like": {
                        "icon":"thumbs-up",
                        "number": "12",
                        "text": "Likes",
                        "isActive": true
                    },
                    "comment": {
                        "icon":"ios-chatbubbles",
                        "number": "4",
                        "text": "Comments",
                        "isActive": false
                    }
                },
                {
                    "id": 2,
                    "image": "assets/images/background/10.jpg",
                    "time": "MARCH 14, 2017",
                    "title": "Open Air Concert",
                    "description": "Use these simple tricks to pack more nutrition into every meal!",
                    "like": {
                        "icon":"thumbs-up",
                        "number": "12",
                        "text": "Likes",
                        "isActive": false
                    },
                    "comment": {
                        "icon":"ios-chatbubbles",
                        "number": "4",
                        "text": "Comments",
                        "isActive": true
                    }
                },
                {
                    "id": 3,
                    "image": "assets/images/background/9.jpg",
                    "time": "MARCH 14, 2017",
                    "title": "Sea ture",
                    "description": "Use these simple tricks to pack more nutrition into every meal!",
                    "like": {
                        "icon":"thumbs-up",
                        "number": "12",
                        "text": "Likes",
                        "isActive": false
                    },
                    "comment": {
                        "icon":"ios-chatbubbles",
                        "number": "4",
                        "text": "Comments",
                        "isActive": false
                    },
                },
                {
                    "id": 4,
                    "image": "assets/images/background/7.jpg",
                    "time": "MARCH 14, 2017",
                    "title": "Mountain Trout",
                    "description": "Use these simple tricks to pack more nutrition into every meal!",
                    "like": {
                        "icon":"thumbs-up",
                        "number": "12",
                        "text": "Likes",
                        "isActive": false
                    },
                    "comment": {
                        "icon":"ios-chatbubbles",
                        "number": "4",
                        "text": "Comments",
                        "isActive": false
                    }
                },
                {
                    "id": 5,
                    "image": "assets/images/background/5.jpg",
                    "title": "Bridge Tour",
                    "time": "MARCH 14, 2017",
                    "description": "Use these simple tricks to pack more nutrition into every meal!",
                    "like": {
                        "icon":"thumbs-up",
                        "number": "12",
                        "text": "Likes",
                        "isActive": false
                    },
                    "comment": {
                        "icon":"ios-chatbubbles",
                        "number": "4",
                        "text": "Comments",
                        "isActive": false
                    }
                },
                {
                    "id": 6,
                    "image": "assets/images/background/2.jpg",
                    "time": "MARCH 14, 2017",
                    "title": "Main Stage Event",
                    "description": "Use these simple tricks to pack more nutrition into every meal!",
                    "like": {
                        "icon":"thumbs-up",
                        "number": "12",
                        "text": "Likes",
                        "isActive": false
                    },
                    "comment": {
                        "icon":"ios-chatbubbles",
                        "number": "4",
                        "text": "Comments",
                        "isActive": false
                    }
                }
            ]
        };
    }

    getDataForTheme = (menuItem: any): Array<any> => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    };

    getEventsForTheme = (menuItem: any): any => {
        var that = this;
        return {
            'onItemClick': function(item: any) {
                  that.toastCtrl.presentToast(item.title);
            },
            'onShare': function(item: any) {
                  that.toastCtrl.presentToast("Share");
            },
            'onLike': function(item: any) {
                if (item && item.like) {
                    if (item.like.isActive) {
                        item.like.isActive = false;
                        item.like.number--;    
                    } else {
                        item.like.isActive= true;
                        item.like.number++;
                    }                   
                } 
            },
            'onComment': function(item: any) {
                if (item && item.comment) {
                    if (item.comment.isActive) {
                        item.comment.isActive = false;
                        item.comment.number--;    
                    } else {
                        item.comment.isActive= true;
                        item.comment.number++;
                    }                   
                } 
            },
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
                    .object('listView/googleCards/' + item.theme)
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
