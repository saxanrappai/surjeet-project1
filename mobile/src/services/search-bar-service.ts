import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app-settings'
import { ToastService } from './toast-service'
import { LoadingService } from './loading-service'

@Injectable()
export class SearchBarService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getId = (): string => 'searchBars';

    getTitle = (): string => 'Search bars';

    getAllThemes = (): Array<any> => {
        return [
            { "title": "Simple", "theme": "layout1" },
            { "title": "Field + header", "theme": "layout2" },
            { "title": "Field + header 2", "theme": "layout3" }
        ];
    };

    getDataForTheme = (menuItem: any): Array<any> => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    };

    // SEARCH - Simple data
    getDataForLayout1 = (): any => {
        return {
            "headerTitle": "Simple",
            "items": [
                {
                    "title": "Great Green Salad",
                    "subtitle": "Yummy green feta salad, great for summer evenings! Add as many fruits and vegetables…",
                    "image": "assets/images/background/1.jpg"
                },
                {
                    "title": "Italian Leafy Green Salad",
                    "subtitle": "This is a very, very healthy and hearty salad with a fabulous grapeseed oil and balsamic vinegar…",
                    "image": "assets/images/background/2.jpg"
                },
                {
                    "title": "Restaurant-Style House Salad",
                    "subtitle": "This is a very nice chopped salad with two kinds of lettuce, artichoke hearts, red onion and…",
                    "image": "assets/images/background/3.jpg"
                },
                {
                    "title": "Pear and Pomegranate Salad",
                    "subtitle": "This colorful salad is a fall and winter favorite. It's garnished with pomegranate arils and…",
                    "image": "assets/images/background/4.jpg"
                },
                {
                    "title": "Roquefort Pear Salad",
                    "subtitle": "Tangy Roquefort blue cheese, fruity sliced pear, creamy avocado, and crunchy candied pecans…",
                    "image": "assets/images/background/5.jpg"
                },
                {
                    "title": "BLT Salad",
                    "subtitle": "Crumbly bacon, chopped tomato, shredded lettuce and a  creamy dressing with a hint of…",
                    "image": "assets/images/background/6.jpg"
                },
                {
                    "title": "Asian Chicken Salad",
                    "subtitle": "This is a crunchy, wonderfully satisfying salad that is fabulous with grilled chicken, leftover…",
                    "image": "assets/images/background/7.jpg"
                },
                {
                    "title": "Beet Salad with Goat Cheese",
                    "subtitle": "This is a delicious and easy salad which takes little time and is a great meatless main…",
                    "image": "assets/images/background/8.jpg"
                },
                {
                    "title": "Strawberry and Feta Salad",
                    "subtitle": "A lively mixture of lettuce, strawberries, almonds, and feta is tossed with a tangy oil…",
                    "image": "assets/images/background/9.jpg"
                }
            ]
        };
    };

    // SEARCH - Field + header data
    getDataForLayout2 = (): any => {
        return {
            "headerTitle": "Field + header",
            "title": "Healthy Salads",
            "headerImage": "assets/images/background/10.jpg",
            "items": [
                {
                    "title": "Tomato",
                    "subtitle": "PAP452",
                    "avatar": "assets/images/avatar/1.jpg",
                    "price": "$ 2.2",
                },
                {
                    "title": "Tomato",
                    "subtitle": "PAP452",
                    "avatar": "assets/images/avatar/2.jpg",
                    "price": "$ 1.2",
                },
                {
                    "title": "Tomato",
                    "subtitle": "PAP452",
                    "avatar": "assets/images/avatar/3.jpg",
                    "price": "$ 2.62",
                },
                {
                    "title": "Tomato",
                    "subtitle": "PAP452",
                    "avatar": "assets/images/avatar/4.jpg",
                    "price": "$ 2.58",
                },
                {
                    "title": "Tomato",
                    "subtitle": "PAP452",
                    "avatar": "assets/images/avatar/5.jpg",
                    "price": "$ 6.59",
                },
                {
                    "title": "Tomato",
                    "subtitle": "PAP452",
                    "avatar": "assets/images/avatar/6.jpg",
                    "price": "$ 1.65",
                },
                {
                    "title": "Tomato",
                    "subtitle": "PAP452",
                    "avatar": "assets/images/avatar/7.jpg",
                    "price": "$ 1.98",
                },
                {
                    "title": "Tomato",
                    "subtitle": "PAP452",
                    "avatar": "assets/images/avatar/8.jpg",
                    "price": "$ 2.45",
                }
            ]
        };
    };

    // SEARCH - Field + header 2 data
    getDataForLayout3 = (): any => {
        return {
            "headerTitle": "Field + header 2",
            "title": "Healthy Salads",
            "items": [
                {
                    "id": 1,
                    "image": "assets/images/background/1.jpg",
                    "time": "MARCH 14, 2017",
                    "title": "Mock Tuna Salad",
                    "description": "This is a chickpea spread that tastes like tuna salad! No kidding! Great served in a sandwich.",
                    "like": {
                        "icon": "thumbs-up",
                        "number": "363",
                        "isActive": false
                    },
                    "comment": {
                        "icon": "ios-chatbubbles",
                        "number": "12",
                        "isActive": false
                    }
                },
                {
                    "id": 2,
                    "image": "assets/images/background/2.jpg",
                    "time": "MARCH 14, 2017",
                    "title": "Ramen Coleslaw",
                    "description": "This is a very crunchy, very satisfying coleslaw with ramen noodles, cabbage, toasted…",
                    "like": {
                        "icon": "thumbs-up",
                        "number": "363",
                        "isActive": false
                    },
                    "comment": {
                        "icon": "ios-chatbubbles",
                        "number": "12",
                        "isActive": false
                    }
                },
                {
                    "id": 3,
                    "image": "assets/images/background/3.jpg",
                    "time": "MARCH 14, 2017",
                    "title": "Southern Potato Salad",
                    "description": "This warm potato salad is a classic, with mayonnaise, sweet pickle, garlic, mustard,…",
                    "like": {
                        "icon": "thumbs-up",
                        "number": "363",
                        "isActive": false
                    },
                    "comment": {
                        "icon": "ios-chatbubbles",
                        "number": "12",
                        "isActive": false
                    }
                },
                {
                    "id": 4,
                    "image": "assets/images/background/11.jpg",
                    "time": "MARCH 14, 2017",
                    "title": "Asian Chicken Salad",
                    "description": "This is a crunchy, wonderfully satisfying salad that is fabulous with grilled chicken, leftover…",
                    "like": {
                        "icon": "thumbs-up",
                        "number": "363",
                        "isActive": false
                    },
                    "comment": {
                        "icon": "ios-chatbubbles",
                        "number": "12",
                        "isActive": false
                    }
                },
                {
                    "id": 5,
                    "image": "assets/images/background/4.jpg",
                    "time": "MARCH 14, 2017",
                    "title": "Mediterranean Quinoa Salad",
                    "description": "An easy to make light salad that can be served with or without chicken for vegetarians",
                    "like": {
                        "icon": "thumbs-up",
                        "number": "363",
                        "isActive": false
                    },
                    "comment": {
                        "icon": "ios-chatbubbles",
                        "number": "12",
                        "isActive": false
                    }
                },
                {
                    "id": 6,
                    "image": "assets/images/background/9.jpg",
                    "time": "MARCH 14, 2017",
                    "title": "Antipasto Pasta Salad",
                    "description": "A nice balsamic vinegar and oil mixture with oregano, parsley and Parmesan whipped in.",
                    "like": {
                        "icon": "thumbs-up",
                        "number": "363",
                        "isActive": false
                    },
                    "comment": {
                        "icon": "ios-chatbubbles",
                        "number": "12",
                        "isActive": false
                    }
                }
            ]
        };
    }

    getEventsForTheme = (menuItem: any): any => {
        var that = this;
        return {
            'onTextChange': function (text: any) {
                that.toastCtrl.presentToast(text);
            },
            'onItemClick': function (item: any) {
                that.toastCtrl.presentToast(item.title);
            },
            'onLikeClick': function(item: any) {
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
            'onCommentClick': function(item: any) {
                if (item && item.comment) {
                    if (item.comment.isActive) {
                        item.comment.isActive = false;
                        item.comment.number--;    
                    } else {
                        item.comment.isActive= true;
                        item.comment.number++;
                    }                   
                } 
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
                    .object('searchBars/' + item.theme)
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
