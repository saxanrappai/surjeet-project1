import { ToastController, LoadingController, Loading } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { AppSettings } from './app-settings'

@Injectable()
export class ToastService {

  constructor(private toastCtrl: ToastController, private loadingCtrl: LoadingController) { }
  loading: Loading;
  presentToast(message: string) {
    let toastItem = AppSettings.TOAST;
    toastItem["message"] = message;
    let toast = this.toastCtrl.create(toastItem);
    toast.present();
  }

  showLoader() {
    this.loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'loading...'
    });

    this.loading.present();
  }

  dismissLoader() {
    if (this.loading) {
      this.loading.dismiss();
    }
  }
}
