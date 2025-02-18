import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams
} from 'ionic-angular';
import {
  HttpService
} from '../../services/HttpService';
import {
  ToastService
} from '../../services/toast-service';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public username: string;
  public password: string;
  data = {
    username: '',
    mobile: '',
    email: '',
    password: '',
    errorUser: 'Please try again',
    errorMobile: 'Please try again',
    errorEmail: 'Please try again',
    errorPassword: 'Please try again',
    isUsernameValid: true,
    isMobileValid: true,
    isEmailValid: true,
    isPasswordValid: true,


  }
  private isUsernameValid: boolean = true;
  private isPasswordValid: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public httpService: HttpService,
    private toastCtrl: ToastService
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUser() {
    console.log("clicked", this.data);
    let vm = this;

    if (this.data.username == '') {
      this.data.isUsernameValid = false;
    } else if (this.data.mobile == '') {
      this.data.isUsernameValid = true;
      this.data.isMobileValid = false;
    } else if (this.data.email == '') {
      this.data.isMobileValid = true;
      this.data.isEmailValid = false;
    } else if (this.data.password == '') {
      this.data.isEmailValid = true;
      this.data.isPasswordValid = false;
    } else {

      this.data.isPasswordValid = true;
      this.httpService.doRegister(this.data)
        .subscribe(result => {
          console.log("result from signup", result);
          vm.toastCtrl.presentToast(result.message);
          if (result.responce == true) {
            setTimeout(() => {
              this.navCtrl.push('LoginPage');
            }, 3000);
          }
        });

    }



    return false;
  }
}