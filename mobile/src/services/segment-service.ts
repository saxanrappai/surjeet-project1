import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app-settings'
import { ToastService } from './toast-service'
import { LoadingService } from './loading-service'

@Injectable()
export class SegmentService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getId = (): string => 'segment';

    getTitle = (): string => 'Segment';

    getAllThemes = (): Array<any> => {
        return [
            { "title": "Segment List", "theme": "layout1" },
            { "title": "Segment Card", "theme": "layout2" },
            { "title": "Segment Post", "theme": "layout3" }
        ];
    };

    getDataForTheme = (menuItem: any): any => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    };

    getEventsForTheme = (menuItem: any): any => {
        var that = this;
        return {
            'onButton': function (item: any) {
                that.toastCtrl.presentToast(item.title);
            },
            'onItemClick': function (item: any) {
                that.toastCtrl.presentToast(item.title);
            },
            'onLike': function (item: any) {
                if (item && item.like) {
                    if (item.like.isActive) {
                        item.like.isActive = false;
                        item.like.number--;
                    } else {
                        item.like.isActive = true;
                        item.like.number++;
                    }
                }
            },
            'onComment': function (item: any) {
                if (item && item.comment) {
                    if (item.comment.isActive) {
                        item.comment.isActive = false;
                        item.comment.number--;
                    } else {
                        item.comment.isActive = true;
                        item.comment.number++;
                    }
                }
            }
        };
    };

    getDataForLayout1 = (): any => {
        return {
            "headerTitle": "Segment List",
            "segmentButton1": "Vegetable",
            "segmentButton2": "Diet and Health",
            // Data Page 1
            "page1": {
                "background": "assets/images/background/9.jpg",
                "items": [
                    {
                        "id": 1,
                        "image": "assets/images/background/1.jpg",
                        "title": "Garlic Broccoli",
                        "category": "Vegetable",
                        "price": "$1.99",
                    },
                    {
                        "id": 2,
                        "image": "assets/images/background/2.jpg",
                        "title": "Mexican Cucumber Salad",
                        "category": "Vegetable",
                        "price": "$3.99",
                    },
                    {
                        "id": 3,
                        "image": "assets/images/background/3.jpg",
                        "title": "Zesty Coleslaw",
                        "category": "Vegetable",
                        "price": "$3.99",
                    },
                    {
                        "id": 4,
                        "image": "assets/images/background/4.jpg",
                        "title": " Dave's Coleslaw",
                        "category": "Vegetable",
                        "comments": "512",
                        "price": "$3.99",
                    },
                    {
                        "id": 5,
                        "image": "assets/images/background/5.jpg",
                        "title": "Insalata Caprese I",
                        "category": "Vegetable",
                        "price": "$3.99",
                    }
                ]
            },
            // Data Page 2
            "page2": {
                "background": "assets/images/background/8.jpg",
                "items": [
                    {
                        "id": 1,
                        "image": "assets/images/background/6.jpg",
                        "title": "Healthy Turmeric Chicken Stew",
                        "category": "Healthy",
                        "price": "$1.99",
                    },
                    {
                        "id": 2,
                        "image": "assets/images/background/7.jpg",
                        "title": "Acai Smoothie Bowl",
                        "category": "Healthy",
                        "price": "$3.99",
                    },
                    {
                        "id": 3,
                        "image": "assets/images/background/8.jpg",
                        "title": "Quinoa with Asian Flavors",
                        "category": "Healthy",
                        "price": "$3.99",
                    },
                    {
                        "id": 4,
                        "image": "assets/images/background/9.jpg",
                        "title": " Quinoa and Black Beans",
                        "category": "Healthy",
                        "comments": "512",
                        "price": "$3.99",
                    },
                    {
                        "id": 5,
                        "image": "assets/images/background/5.jpg",
                        "title": "Maple Salmon",
                        "category": "Healthy",
                        "price": "$3.99",
                    }
                ]
            }
        };
    };

    getDataForLayout2 = (): any => {
        return {
            "headerTitle": "Segment Card",
            "segmentButton1": "Vegetable",
            "segmentButton2": "Low Calorie",
            // Data Page 1
            "page1": {
                "items": [
                    {
                        "id": 1,
                        "image": "assets/images/background/1.jpg",
                        "title": "Fluffy French Toast",
                        "category": "Healthy Recipes",
                        "description": "Flavorful refried beans seasoned with garlic, jalapeno, and cumin are simple to make whe...",
                    },
                    {
                        "id": 2,
                        "image": "assets/images/background/2.jpg",
                        "title": "Dumplings",
                        "category": "Healthy Recipes",
                        "description": "Want to make your pizza dough, but don't have time for it to rise? This is a quick and easy…",
                    },
                    {
                        "id": 3,
                        "image": "assets/images/background/3.jpg",
                        "title": "Cabbage Fat-Burning Soup",
                        "category": "Healthy Recipes",
                        "description": "These garlic-and-cayenne-stoked chicken breast morsels are baked instead of fried for a low fat…",
                    },
                    {
                        "id": 4,
                        "image": "assets/images/background/4.jpg",
                        "title": "low Cooker Turkey Breast",
                        "category": "Healthy Recipes",
                        "description": "This chicken steeps in a rich, bourbon-based marinade before baking.",
                    },
                    {
                        "id": 5,
                        "image": "assets/images/background/5.jpg",
                        "title": "Red Lentil Curry",
                        "category": "Healthy Recipes",
                        "description": "Pineapple chunks give barbecue sauce a delightful Hawaiian flair.",
                    }
                ]
            },
            // Data Page 2
            "page2": {
                "items": [
                    {
                        "id": 1,
                        "image": "assets/images/background/6.jpg",
                        "title": "Chicken with Ginger Pesto",
                        "category": "Low Calorie",
                        "description": "Delish zucchini stuffed with your favorite ingredients and finished on the hot grill. Great…",
                    },
                    {
                        "id": 2,
                        "image": "assets/images/background/7.jpg",
                        "title": "Grilled Pineapple Slices",
                        "category": "Low Calorie",
                        "description": "As the title says, this side dish recipe simply mixes steamed broccoli and carrots with…",
                    },
                    {
                        "id": 3,
                        "image": "assets/images/background/8.jpg",
                        "title": "Quinoa and Black Beans",
                        "category": "Low Calorie",
                        "description": "Marinate flank steak in a mixture of coriander seed, lime juice, and soy sauce then broil it for…",
                    },
                    {
                        "id": 4,
                        "image": "assets/images/background/9.jpg",
                        "title": "Braised Balsamic Chicken",
                        "category": "Low Calorie",
                        "description": "Quick and easy black bean burgers, spiced up with chili sauce, cumin, garlic and chili…",
                    },
                    {
                        "id": 5,
                        "image": "assets/images/background/1.jpg",
                        "title": "Roasted Brussels Sprouts",
                        "category": "Low Calorie",
                        "description": "PMake your own applesauce at home with just apples, sugar, cinnamon, and this recipe.",
                    }
                ]
            }
        };
    };

    getDataForLayout3 = (): any => {
        return {
            "headerTitle": "Segment Post",
            "segmentButton1": "Vegetable",
            "segmentButton2": "Low Calorie",
            // Data Page 1
            "page1": {
                "items": [
                    {
                        "id": 1,
                        "image": "assets/images/background/1.jpg",
                        "time": "25 January 2018",
                        "title": "Baked Honey Mustard Chicken",
                        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
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
                        "id": 2,
                        "image": "assets/images/background/2.jpg",
                        "time": "03 May 2018",
                        "title": "Chicken and Bacon Shish Kabobs",
                        "description": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
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
                        "id": 3,
                        "image": "assets/images/background/3.jpg",
                        "time": "30 July 2018",
                        "title": "Fast and Friendly Meatballs",
                        "description": "It is a long established fact that a reader will be distracted by the readable content",
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
                        "image": "assets/images/background/4.jpg",
                        "time": "28 April 2018",
                        "title": "Real Hummus",
                        "description": "There are many variations of passages of Lorem Ipsum available, but the majority",
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
                        "image": "assets/images/background/5.jpg",
                        "time": "15 November 2017",
                        "title": "Emily's Famous Hash Browns",
                        "description": "If you are going to use a passage of Lorem Ipsum, you need to be sure there",
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
            },
            // Data Page 2
            "page2": {
                "items": [
                    {
                        "id": 1,
                        "image": "assets/images/background/6.jpg",
                        "time": "09 May 2018",
                        "title": "Pesto Pasta with Chicken",
                        "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots",
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
                        "id": 2,
                        "image": "assets/images/background/7.jpg",
                        "time": "08 July 2018",
                        "title": "Simple Roasted Butternut Squash",
                        "description": "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
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
                        "id": 3,
                        "image": "assets/images/background/8.jpg",
                        "time": "11 September 2018",
                        "title": "Chicken and Red Wine Sauce",
                        "description": "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below",
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
                        "image": "assets/images/background/9.jpg",
                        "time": "23 July 2018",
                        "title": "Green Beans with Cherry Tomatoes",
                        "description": "Lorem Ipsum is therefore always free from repetition, injected humour.",
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
                        "image": "assets/images/background/1.jpg",
                        "time": "05 June 2018",
                        "title": "Sauteed Garlic Asparagus",
                        "description": "Lorem Ipsum as their default model text, and a search for 'lorem ipsum'",
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
    }

    load(item: any): Observable<any> {
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('segment/' + item.theme)
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
