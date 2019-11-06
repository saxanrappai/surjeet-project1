import {
  Component,
  ViewChild
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  Navbar,
  Nav
} from 'ionic-angular';
import {
  Storage
} from '@ionic/storage';
import {
  log
} from 'util';
import {
  Camera,
  CameraOptions
} from '@ionic-native/camera';
import {DomSanitizer} from '@angular/platform-browser';

//window.resolveLocalFileSystemURL = window.resolveLocalFileSystemURL || {};
//import { Platform, MenuController, Nav } from 'ionic-angular';

/**
 * Generated class for the PagesSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pages-settings',
  templateUrl: 'pages-settings.html',
})
export class PagesSettingsPage {

  imageProf;
  /* ------------------------------------------ */
  /* ------------------------------------------ */
  /* ------------------------------------------ */
  @ViewChild(Navbar) navBar: Navbar;
  @ViewChild(Nav) nav: Nav;
  ionViewDidLoad() {
    this.navBar.backButtonClick = (e: UIEvent) => {
      console.log('backButtonClick '); 
      this.navCtrl.setRoot('MainProductPage');
      this.navCtrl.popToRoot();
    }
    /*
   if(localStorage.profilePic == undefined){
    this.profileimage = "assets/images/noimage.png";
    var image: any = document.getElementById('profileImage');
    image.src = this.profileimage ;
      }
    else{
     //  image.src = localStorage.profilePic ;


      this.imageProf =   localStorage.profilePic;

      
    }
    */
  }  
  /* ------------------------------------------ */
  /* ------------------------------------------ */
  /* ------------------------------------------ */
  profileName;
  profileimage;
  constructor(public navCtrl: NavController,
    private nativeStorage: Storage,
    private camera: Camera,
    private _DomSanitizationService: DomSanitizer,
    public navParams: NavParams) {

    this.nativeStorage.get('user_fullname').then((name) => {

      this.profileName = name;
    });
 
  }
 
  data = [{
      title: "My Profile",
      icon: "person",
      url:""
    },
    {
      title: "Edit Profile",
      icon: "create",
      url:""
    },
    {
      title: "My orders",
      icon: "ios-list-box-outline",
      url:"MyordersPage"
    },
    {
      title: "Notification",
      icon: "notifications",
      url:""
    },
    {
      title: "Change Password",
      icon: "lock",
      url:""
    },
    {
      title: "Feedback",
      icon: "chatbubbles",
      url:""
    },
    {
      title: "Frequently Asked Questions",
      icon: "help-circle",
      url:""
    },
    {
      title: "Terms and Conditions",
      icon: "document",
      url:""
    },
    {
      title: "Privacy Policy",
      icon: "briefcase",
      url:""
    },

  ];

  logout() {
    this.nativeStorage.set('loggedin', false);
    this.navCtrl.push("LandingPage");
  }



  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    allowEdit: true,
  }


  pageNavigate(i){
    if(this.data[i].url != ''){
  //this.navCtrl.setRoot(this.data[i].url);
  //this.navCtrl.popToRoot();
   this.navCtrl.push(this.data[i].url);

    }

  }
 
  getProfilePhoto() {
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL): 
      let base64Image = "data:image/jpeg;base64," + imageData;
      console.log("imageData", imageData);
      console.log("base64Image", base64Image);
      localStorage.profilePic =   imageData ; 
      /*
      var image: any = document.getElementById('profileImage');
      image.src = base64Image ;
      */

this.imageProf =  imageData;

    }, (err) => {
      // Handle error
      console.log("error", err);

    });
  } 
}