import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app-settings'
import { LoadingService } from './loading-service'

@Injectable()
export class IntroService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService) {}

    // INTRO WIZARD
    getData = (): any => {
        return {
          "backgroundImage": "assets/images/background/10.jpg",
          "btnPrev": "Previous",
          "btnNext": "Next",
          "btnFinish": "Finish",
          "items": [
              {
                  "image": "assets/images/background/1.jpg",
                  "title": "Greek Farro Salad",
                  "description": "Search by cousine type, date, number of people and many other criteria"
              },
              {
                 "image": "assets/images/background/2.jpg",
                  "title": "Veggie Bulgur Salad",
                  "description": "Search by cousine type, date, number of people and many other criteria"
              },
              {
                 "image": "assets/images/background/3.jpg",
                  "title": "California Melt",
                  "description": "Search by cousine type, date, number of people and many other criteria"
              }
          ]
        };
    }

    load(): Observable<any> {
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('intro')
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
                observer.next(this.getData());
                observer.complete();
            });
        }
    };
}
