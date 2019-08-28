import { IService } from './IService';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LoadingService } from './loading-service';

@Injectable()
export class CardReaderService implements IService {

    constructor(private loadingService: LoadingService) { }

    getId = (): string => 'cardReader';

    getTitle = (): string => 'CardReader';

    getAllThemes = (): Array<any> => {
        return [
          {"title" : "Click here", "theme"  : "layout1"},
        ];
    };

    getDataForTheme = (menuItem: any): any => {
        return this[
            'getOptionsFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    };

    getOptionsForLayout1 = (): any => {
        //All information about cardIOptions you can find on
        // https://ionicframework.com/docs/native/card-io/
        return {
            "requireExpiry": true,                          
            "requireCVV": false,                            
            "requirePostalCode": false,                     
            "suppressManual":false,                         
            "restrictPostalCodeToNumericOnly":false,        
            "keepApplicationTheme":false,
            "requireCardholderName":false,
            "scanInstructions":false,
            "noCamera":false,
            "scanExpiry":false,
            "languageOrLocale":false,
            "guideColor":false,
            "supressConfirmation":false,
            "hideCardIOLogo":false,
            "useCardIOLogo":false,
            "supressScan":false,
        };
    };

    getEventsForTheme = (menuItem: any): any => {
    };
    
    prepareParams = (item: any) => {
        let result = {
            title: item.title,
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
        return new Observable(observer => {
          that.loadingService.hide();
          observer.next(this.getDataForTheme(item));
          observer.complete();
        });
    }
}
