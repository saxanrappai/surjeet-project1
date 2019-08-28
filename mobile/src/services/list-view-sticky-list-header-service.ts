import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app-settings'
import { ToastService } from './toast-service'
import { LoadingService } from './loading-service'

@Injectable()
export class ListViewStickyListHeaderService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getId = (): string => 'stickyListHeader';

    getTitle = (): string => 'Sticky List header';

    getAllThemes = (): Array<any> => {
        return [
            { "title": "Basic", "theme": "layout1" },
            { "title": "Product", "theme": "layout2" },
            { "title": "Post", "theme": "layout3" }
        ];
    };

    // STICKY LIST HEADER - Basic data
    getDataForLayout1 = (): any => {
        return {
            "items": [
                {
                    "groupName": "Gluten-Free Recipes",
                    "items": [
                        {
                            "id": 1,
                            "title": "Boston Baked Beans",
                            "image": "assets/images/background/1.jpg",
                            "subtitle": "This fun fruit plate is great for Thanksgiving. Serve with chocolate sauce or yogurt."
                        },
                        {
                            "id": 2,
                            "title": "Turkey Spaghetti Zoodles",
                            "image": "assets/images/background/3.jpg",
                            "subtitle": "This fun fruit plate is great for Thanksgiving. Serve with chocolate sauce or yogurt."
                        },
                        {
                            "id": 3,
                            "title": "Gluten-Free Pizza Crust or Flatbread",
                            "image": "assets/images/background/2.jpg",
                            "subtitle": "This fun fruit plate is great for Thanksgiving. Serve with chocolate sauce or yogurt."
                        }
                    ]
                },
                {
                    "groupName": "Bread Recipes",
                    "items": [
                        {
                            "id": 1,
                            "title": "Dutch Oven Caraway Rye Bread",
                            "image": "assets/images/background/4.jpg",
                            "subtitle": "1 post"
                        },
                        {
                            "id": 2,
                            "title": "Butter Crescents",
                            "image": "assets/images/background/5.jpg",
                            "subtitle": "1 post"
                        },
                        {
                            "id": 3,
                            "title": "Butterhorns",
                            "image": "assets/images/background/7.jpg",
                            "subtitle": "5 post"
                        },
                        {
                            "id": 4,
                            "title": "Squash Braid",
                            "image": "assets/images/background/8.jpg",
                            "subtitle": "3 post"
                        },
                        {
                            "id": 5,
                            "title": "Cast Iron Cornbread",
                            "image": "assets/images/background/9.jpg",
                            "subtitle": "4 post"
                        }
                    ]
                },
                {
                    "groupName": "Pressure Cooker Recipes",
                    "items": [
                        {
                            "id": 1,
                            "title": "German Apple Cake I",
                            "image": "assets/images/background/6.jpg",
                            "subtitle": "5 post"
                        },
                        {
                            "id": 2,
                            "title": "Too Much Chocolate Cake",
                            "image": "assets/images/background/5.jpg",
                            "subtitle": "3 post"
                        },
                        {
                            "id": 3,
                            "title": "One Bowl Chocolate Cake III",
                            "image": "assets/images/background/4.jpg",
                            "subtitle": "2 post"
                        },
                        {
                            "id": 4,
                            "title": "Carrot Cake III",
                            "image": "assets/images/background/3.jpg",
                            "subtitle": "4 post"
                        },
                        {
                            "id": 5,
                            "title": "Simple White Cake",
                            "image": "assets/images/background/2.jpg",
                            "subtitle": "6 post"
                        }
                    ]
                },
                {
                    "groupName": "Thanksgiving Recipes",
                    "items": [
                        {
                            "id": 1,
                            "title": "Cornucopia",
                            "image": "assets/images/background/1.jpg",
                            "subtitle": "6 post"
                        },
                        {
                            "id": 2,
                            "title": "Truly Delicious Brussels Sprouts",
                            "image": "assets/images/background/2.jpg",
                            "subtitle": "4 post"
                        },
                        {
                            "id": 3,
                            "title": "Holiday Dressing",
                            "image": "assets/images/background/3.jpg",
                            "subtitle": "7 post"
                        },
                        {
                            "id": 4,
                            "title": "Grandma's Green Bean Casserole",
                            "image": "assets/images/background/4.jpg",
                            "subtitle": "8 post"
                        }
                    ]
                },
                {
                    "groupName": "Thanksgiving Salads",
                    "items": [
                        {
                            "id": 1,
                            "title": "Sheri's Fun Fruit Turkey",
                            "image": "assets/images/background/9.jpg",
                            "subtitle": "8 post"
                        },
                        {
                            "id": 2,
                            "title": "Thanksgiving Day Salad",
                            "image": "assets/images/background/10.jpg",
                            "subtitle": "18 post"
                        },
                        {
                            "id": 3,
                            "title": "Cranberry Waldorf",
                            "image": "assets/images/background/11.jpg",
                            "subtitle": "10 post"
                        },
                        {
                            "id": 4,
                            "title": "Persimmon and Pomegranate Salad",
                            "image": "assets/images/background/8.jpg",
                            "subtitle": "120 post"
                        }
                    ]
                }
            ]
        };
    };

    // STICKY LIST HEADER - Product data
    getDataForLayout2 = (): any => {
        return {
            "items": [
                {
                    "groupName": "Healthy Lunches",
                    "items": [
                        {
                            "id": 1,
                            "image1": "assets/images/background/1.jpg",
                            "image2": "assets/images/background/2.jpg",
                            "image3": "assets/images/background/3.jpg",
                            "image4": "assets/images/background/4.jpg",
                            "image5": "assets/images/background/5.jpg",
                            "image6": "assets/images/background/6.jpg",
                            "image7": "assets/images/background/7.jpg",
                            "price": "$33.99",
                            "buy": "buy",
                            "subtitle": "Free shipping"
                        },
                        {
                            "id": 2,
                            "image1": "assets/images/background/9.jpg",
                            "image2": "assets/images/background/8.jpg",
                            "image3": "assets/images/background/7.jpg",
                            "image4": "assets/images/background/6.jpg",
                            "image5": "assets/images/background/5.jpg",
                            "image6": "assets/images/background/4.jpg",
                            "image7": "assets/images/background/3.jpg",
                            "price": "$28.17",
                            "buy": "buy",
                            "subtitle": "Free shipping"
                        }
                    ]
                },
                {
                    "groupName": "Healthy Recipes",
                    "items": [
                        {
                            "id": 1,
                            "image1": "assets/images/background/2.jpg",
                            "image2": "assets/images/background/3.jpg",
                            "image3": "assets/images/background/4.jpg",
                            "image4": "assets/images/background/5.jpg",
                            "image5": "assets/images/background/6.jpg",
                            "image6": "assets/images/background/7.jpg",
                            "image7": "assets/images/background/8.jpg",
                            "price": "$31.99",
                            "buy": "buy",
                            "subtitle": "Free shipping"
                        },
                        {
                            "id": 2,
                            "image1": "assets/images/background/4.jpg",
                            "image2": "assets/images/background/5.jpg",
                            "image3": "assets/images/background/6.jpg",
                            "image4": "assets/images/background/7.jpg",
                            "image5": "assets/images/background/8.jpg",
                            "image6": "assets/images/background/9.jpg",
                            "image7": "assets/images/background/1.jpg",
                            "price": "$25.69",
                            "buy": "buy",
                            "subtitle": "Free shipping"
                        },
                        {
                            "id": 3,
                            "image1": "assets/images/background/8.jpg",
                            "image2": "assets/images/background/7.jpg",
                            "image3": "assets/images/background/6.jpg",
                            "image4": "assets/images/background/5.jpg",
                            "image5": "assets/images/background/4.jpg",
                            "image6": "assets/images/background/2.jpg",
                            "image7": "assets/images/background/1.jpg",
                            "price": "$13.66",
                            "buy": "buy",
                            "subtitle": "Free shipping"
                        }
                    ]
                },
                {
                    "groupName": "Recipes",
                    "items": [
                        {
                            "id": 1,
                            "image1": "assets/images/background/7.jpg",
                            "image2": "assets/images/background/1.jpg",
                            "image3": "assets/images/background/2.jpg",
                            "image4": "assets/images/background/3.jpg",
                            "image5": "assets/images/background/4.jpg",
                            "image6": "assets/images/background/5.jpg",
                            "image7": "assets/images/background/6.jpg",
                            "price": "$17.89",
                            "buy": "buy",
                            "subtitle": "Free shipping"
                        },
                        {
                            "id": 2,
                            "image1": "assets/images/background/1.jpg",
                            "image2": "assets/images/background/3.jpg",
                            "image3": "assets/images/background/4.jpg",
                            "image4": "assets/images/background/6.jpg",
                            "image5": "assets/images/background/5.jpg",
                            "image6": "assets/images/background/7.jpg",
                            "image7": "assets/images/background/8.jpg",
                            "price": "$55.01",
                            "buy": "buy",
                            "subtitle": "Free shipping"
                        },
                        {
                            "id": 3,
                            "image1": "assets/images/background/5.jpg",
                            "image2": "assets/images/background/7.jpg",
                            "image3": "assets/images/background/8.jpg",
                            "image4": "assets/images/background/9.jpg",
                            "image5": "assets/images/background/5.jpg",
                            "image6": "assets/images/background/2.jpg",
                            "image7": "assets/images/background/3.jpg",
                            "price": "$14.45",
                            "buy": "buy",
                            "subtitle": "Free shipping"
                        }
                    ]
                },
                {
                    "groupName": "Healthy Breakfast and Brunch",
                    "items": [
                        {
                            "id": 1,
                            "image1": "assets/images/background/6.jpg",
                            "image2": "assets/images/background/5.jpg",
                            "image3": "assets/images/background/6.jpg",
                            "image4": "assets/images/background/7.jpg",
                            "image5": "assets/images/background/8.jpg",
                            "image6": "assets/images/background/2.jpg",
                            "image7": "assets/images/background/3.jpg",
                            "price": "$17.99",
                            "buy": "buy",
                            "subtitle": "Free shipping"
                        },
                        {
                            "id": 2,
                            "image1": "assets/images/background/4.jpg",
                            "image2": "assets/images/background/9.jpg",
                            "image3": "assets/images/background/2.jpg",
                            "image4": "assets/images/background/1.jpg",
                            "image5": "assets/images/background/7.jpg",
                            "image6": "assets/images/background/3.jpg",
                            "image7": "assets/images/background/6.jpg",
                            "price": "$44.99",
                            "buy": "buy",
                            "subtitle": "Free shipping"
                        }
                    ]
                }
            ]
        };
    };

    // STICKY LIST HEADER - Post data
    getDataForLayout3 = (): any => {
        return {
            "items": [
                {
                    "groupName": "Yesterday",
                    "dateTime": "January 19, 2018.",
                    "items": [
                        {
                            "id": 1,
                            "name": "Adeline O'Reilly",
                            "title": "Presto Vegan Pesto",
                            "shareIcon": "more",
                            "image": "assets/images/avatar/15.jpg",
                            "cardImg": "assets/images/background/1.jpg",
                            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                        },
                        {
                            "id": 2,
                            "name": "Big Soft Ginger Cookies",
                            "title": "Baked Kale Chips",
                            "shareIcon": "more",
                            "image": "assets/images/avatar/10.jpg",
                            "cardImg": "assets/images/background/2.jpg",
                            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                        }
                    ]
                },
                {
                    "groupName": "Today",
                    "dateTime": "June 26, 2018.",
                    "items": [
                        {
                            "id": 1,
                            "name": "Reanna Langosh",
                            "title": "Quinoa and Black Beans",
                            "shareIcon": "more",
                            "image": "assets/images/avatar/11.jpg",
                            "cardImg": "assets/images/background/3.jpg",
                            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                        },
                        {
                            "id": 2,
                            "name": "Theresia Bechtelar",
                            "title": "Sweet, Sticky and Spicy Chicken",
                            "shareIcon": "more",
                            "image": "assets/images/avatar/12.jpg",
                            "cardImg": "assets/images/background/4.jpg",
                            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                        }
                    ]
                },
                {
                    "groupName": "tomorrow",
                    "dateTime": "August 07, 2018.",
                    "items": [
                        {
                            "id": 1,
                            "name": "Jena Lesch",
                            "title": "Braised Balsamic Chicken",
                            "shareIcon": "more",
                            "image": "assets/images/avatar/13.jpg",
                            "cardImg": "assets/images/background/5.jpg",
                            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                        },
                        {
                            "id": 2,
                            "name": "Yesenia Beer",
                            "title": "Sarah's Applesauce",
                            "shareIcon": "more",
                            "image": "assets/images/avatar/14.jpg",
                            "cardImg": "assets/images/background/6.jpg",
                            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                        }
                    ]
                }
            ]
        };
    };

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
            'onItemClick': function (item: any) {
                  that.toastCtrl.presentToast(item);
            },
            'onProceed': function (item: any) {
                  that.toastCtrl.presentToast(item);
            },
            'onBuy': function (item: any) {
                  that.toastCtrl.presentToast(item);
            },
            'onShare': function (item: any) {
                  that.toastCtrl.presentToast(item);
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
    }

    load(item: any): Observable<any> {
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('listView/stickyListHeader/' + item.theme)
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
