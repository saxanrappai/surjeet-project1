import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app-settings'
import { ToastService } from './toast-service'
import { LoadingService } from './loading-service'
import { NavController } from 'ionic-angular';
@Injectable()
export class ListViewExpandableService implements IService {
    selectedProducts: any = [];
    constructor(private loadingService: LoadingService, private toastCtrl: ToastService, private navCtrl: NavController) { }

    getId = (): string => 'expandable';

    getTitle = (): string => 'Expandable';

    getAllThemes = (): Array<any> => {
        return [
            { "title": "Products", "theme": "layout1" },
            { "title": "Full image with CTA", "theme": "layout2" },
            { "title": "Filters products", "theme": "layout3" }
        ];
    };

    getDataForTheme = (menuItem: any): Array<any> => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    };

    // EXPANDABLE -  List big image data
    getDataForLayout1 = (): any => {
        return {
            "items": [
                {
                    "id": 1,
                    "title": "Daniel Perrin",
                    "description": "@daniel",
                    "image": "assets/images/avatar/10.jpg",
                    "expandItems": [
                        {
                            "id": 1,
                            "title": "Pesto Chicken Florentine",
                            "description": "Spinach, chicken and pasta are smothered in a glorious creamy pesto sauce.",
                            "iconStar": "ios-star-outline",
                            "valueiconStar": "9.6",
                            "iconLocation": "ios-pin-outline",
                            "valueLocation": "London, UK",
                        }
                    ]
                },
                {
                    "id": 2,
                    "title": "Manon Roussel",
                    "description": "@manon",
                    "image": "assets/images/avatar/11.jpg",
                    "expandItems": [
                        {
                            "id": 1,
                            "title": "Burgundy Pork Tenderloin",
                            "description": "My husband doesn't care for pork much, but he loves this.",
                            "iconStar": "ios-star-outline",
                            "valueiconStar": "9.6",
                            "iconLocation": "ios-pin-outline",
                            "valueLocation": "London, UK",
                        }
                    ]
                },
                {
                    "id": 3,
                    "title": "Greek Chicken Pasta",
                    "description": "@antoine",
                    "image": "assets/images/avatar/12.jpg",
                    "expandItems": [
                        {
                            "id": 1,
                            "title": "About",
                            "description": "Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.",
                            "iconStar": "ios-star-outline",
                            "valueiconStar": "9.6",
                            "iconLocation": "ios-pin-outline",
                            "valueLocation": "London, UK",
                        }
                    ]
                },
                {
                    "id": 4,
                    "title": "Nicolas Dumas",
                    "description": "@nicolas",
                    "image": "assets/images/avatar/13.jpg",
                    "expandItems": [
                        {
                            "id": 1,
                            "title": "Whole Wheat Honey Bread",
                            "description": "Roasted butternut squash with garlic is a quick and easy side dish ready in less...",
                            "iconStar": "ios-star-outline",
                            "valueiconStar": "9.6",
                            "iconLocation": "ios-pin-outline",
                            "valueLocation": "London, UK",
                        }
                    ]
                },
                {
                    "id": 5,
                    "title": "Laetitia Duhamel",
                    "description": "@laetitia",
                    "image": "assets/images/avatar/14.jpg",
                    "expandItems": [
                        {
                            "id": 1,
                            "title": "Quinoa Tabbouleh",
                            "description": "Quinoa, once a staple grain of ancient Incas, is tossed with lemon juice, tomatoes...",
                            "iconStar": "ios-star-outline",
                            "valueiconStar": "9.6",
                            "iconLocation": "ios-pin-outline",
                            "valueLocation": "London, UK",
                        }
                    ]
                },
                {
                    "id": 6,
                    "title": "Sylvie Rey",
                    "description": "@sylvie",
                    "image": "assets/images/avatar/15.jpg",
                    "expandItems": [
                        {
                            "id": 1,
                            "title": "Salsa Chicken Burrito Filling",
                            "description": "Chicken simmered with tomato sauce, salsa and seasonings - a great standard burrito.",
                            "iconStar": "ios-star-outline",
                            "valueiconStar": "9.6",
                            "iconLocation": "ios-pin-outline",
                            "valueLocation": "London, UK",
                        }
                    ]
                }
            ]
        };
    };

    // EXPANDABLE - Full image with CTA data
    getDataForLayout2 = (): any => {
        return {
            "items": [
                {
                    "id": 1,
                    "title": "Recipe By Dakota Kelly",
                    "subtitle": "1 second ago",
                    "avatar": "assets/images/avatar/10.jpg",
                    "expandItems": [
                        {
                            "id": 1,
                            "title": "Super Al's Cocktail Sauce",
                            "description": "Super Al's semi-famous cocktail sauce.",
                            "contact": "Contact",
                            "info": "(364) 106-7572",
                        }
                    ]
                },
                {
                    "id": 2,
                    "title": "Recipe By Autumn Jacobi",
                    "subtitle": "15 seconds ago",
                    "avatar": "assets/images/avatar/11.jpg",
                    "expandItems": [
                        {
                            "id": 1,
                            "title": "Bar-B-Que Sauce",
                            "description": "This is an easy to make Bar-B-Que sauce using ingredients most people have at home.",
                            "contact": "Contact",
                            "info": "(052) 611-5711",
                        }
                    ]
                },
                {
                    "id": 3,
                    "title": "Recipe By Keven Feil",
                    "subtitle": "16 minutes ago",
                    "avatar": "assets/images/avatar/12.jpg",
                    "expandItems": [
                        {
                            "id": 1,
                            "title": "Super Al's Cocktail Sauce",
                            "description": "The bread machine makes this classic combination pretty easy to come by.",
                            "contact": "Contact",
                            "info": "(605) 230-5253",
                        }
                    ]
                },
                {
                    "id": 4,
                    "title": "Recipe By Genoveva Leannon",
                    "subtitle": "25 minutes ago",
                    "avatar": "assets/images/avatar/13.jpg",
                    "expandItems": [
                        {
                            "id": 1,
                            "title": "Baked Tortilla Chips",
                            "description": "Cumin and lime juice add a real zing to these chips, and they're best when served warm.",
                            "contact": "Contact",
                            "info": "(633) 497-1888",
                        }
                    ]
                }
            ]
        }
    };

    // EXPANDABLE - Filters products
    getDataForLayout3 = (): any => {
        return {
            "button": "Continue",
            "buttonAdd": "Add to Cart",
            "items": [
                {
                    "id": 1,
                    "avatar": "assets/images/avatar/1.jpg",
                    "title": "Kiwi",
                    "subtitle": "PHPAPA",
                    "icon": "icon-chevron-right",
                    "price": "$ 5.69",
                    "counter": 0,
                    "iconAdd": "ios-add-outline",
                    "iconRemove": "ios-remove-outline"
                },
                {
                    "id": 2,
                    "avatar": "assets/images/avatar/2.jpg",
                    "title": "Pear",
                    "subtitle": "PHPAPA",
                    "icon": "icon-chevron-right",
                    "price": "$ 5.69",
                    "counter": 0,
                    "iconAdd": "ios-add-outline",
                    "iconRemove": "ios-remove-outline"
                },
                {
                    "id": 3,
                    "avatar": "assets/images/avatar/3.jpg",
                    "title": "Radish",
                    "subtitle": "PHPAPA",
                    "icon": "icon-chevron-right",
                    "price": "$ 5.69",
                    "counter": 0,
                    "iconAdd": "ios-add-outline",
                    "iconRemove": "ios-remove-outline"
                },
                {
                    "id": 4,
                    "avatar": "assets/images/avatar/4.jpg",
                    "title": "Lime",
                    "subtitle": "PHPAPA",
                    "icon": "icon-chevron-right",
                    "price": "$ 5.69",
                    "counter": 0,
                    "iconAdd": "ios-add-outline",
                    "iconRemove": "ios-remove-outline"
                },
                {
                    "id": 5,
                    "avatar": "assets/images/avatar/5.jpg",
                    "title": "Apricot",
                    "subtitle": "PHPAPA",
                    "icon": "icon-chevron-right",
                    "price": "$ 5.69",
                    "counter": 0,
                    "iconAdd": "ios-add-outline",
                    "iconRemove": "ios-remove-outline"
                },
                {
                    "id": 6,
                    "avatar": "assets/images/avatar/6.jpg",
                    "title": "Grapefruit",
                    "subtitle": "PHPAPA",
                    "icon": "icon-chevron-right",
                    "price": "$ 5.69",
                    "counter": 0,
                    "iconAdd": "ios-add-outline",
                    "iconRemove": "ios-remove-outline"
                },
                {
                    "id": 7,
                    "avatar": "assets/images/avatar/7.jpg",
                    "title": "Cherry",
                    "subtitle": "PHPAPA",
                    "icon": "icon-chevron-right",
                    "price": "$ 5.69",
                    "counter": 0,
                    "iconAdd": "ios-add-outline",
                    "iconRemove": "ios-remove-outline"
                },
                {
                    "id": 8,
                    "avatar": "assets/images/avatar/8.jpg",
                    "title": "Apple",
                    "subtitle": "PHPAPA",
                    "icon": "icon-chevron-right",
                    "price": "$ 5.69",
                    "counter": 0,
                    "iconAdd": "ios-add-outline",
                    "iconRemove": "ios-remove-outline"
                },
                {
                    "id": 9,
                    "avatar": "assets/images/avatar/9.jpg",
                    "title": "Orange",
                    "subtitle": "PHPAPA",
                    "icon": "icon-chevron-right",
                    "price": "$ 5.69",
                    "counter": 0,
                    "iconAdd": "ios-add-outline",
                    "iconRemove": "ios-remove-outline"
                },
                {
                    "id": 10,
                    "avatar": "assets/images/avatar/1.jpg",
                    "title": "Kiwi",
                    "subtitle": "PHPAPA",
                    "icon": "icon-chevron-right",
                    "price": "$ 5.69",
                    "counter": 0,
                    "iconAdd": "ios-add-outline",
                    "iconRemove": "ios-remove-outline"
                },
                {
                    "id": 11,
                    "avatar": "assets/images/avatar/2.jpg",
                    "title": "Pear",
                    "subtitle": "PHPAPA",
                    "icon": "icon-chevron-right",
                    "price": "$ 5.69",
                    "counter": 0,
                    "iconAdd": "ios-add-outline",
                    "iconRemove": "ios-remove-outline"
                }
            ]
        };
    };

    getEventsForTheme = (): any => {
        var that = this;
        return {
            'onItemClick': function (item: any) {
                that.toastCtrl.presentToast('clicked');

            },
            'onRates': function (index: number) {
                that.toastCtrl.presentToast("Rates " + (index + 1));
            },
            'onCheckBoxClick': function (item: any) {
                that.toastCtrl.presentToast(item.title);
            },
            'onButtonClick': function (item: any) {
                //that.toastCtrl.presentToast("Continue");
                that.navCtrl.push('CartDetailsPage', { 'items': that.selectedProducts });
            },
            'onButtonAddClick': function (item: any) {
                that.selectedProducts.push(item);
                console.log(JSON.stringify(item));
                that.toastCtrl.presentToast('Added to cart');
                // that.toastCtrl.presentToast("Add" + JSON.stringify(item));
            }
        };
    };

    prepareParams = (item: any) => {
        let result = {
            title: item.title,
            data: this.getDataForTheme(item),
            events: this.getEventsForTheme()
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
        return new Observable(observer => {
            that.loadingService.hide();
            observer.next(this.getDataForTheme(item));
            observer.complete();
        });
    }
}
