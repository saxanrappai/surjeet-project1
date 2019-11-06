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
/*
    moveFile(file){
 
    var deferred = $q.defer();

    window.resolveLocalFileSystemURL(file,
        function resolveOnSuccess(entry){

            var dateTime = moment.utc(new Date).format('YYYYMMDD_HHmmss');
            var newFileName = dateTime + ".jpg";
            var newDirectory = "photos";

            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSys) {

                    //The folder is created if doesn't exist
                    fileSys.root.getDirectory( newDirectory,
                        {create:true, exclusive: false},
                        function(directory) {

                            entry.moveTo(directory, newFileName, function (entry) {
                                //Now we can use "entry.toURL()" for the img src
                                console.log(entry.toURL());
                                resolve(entry);

                            }, resOnError);
                        },
                        resOnError);
                },
                resOnError);
        }, resOnError);

    return deferred.promise;
}

function resOnError(error) {
    console.log('Awwww shnap!: ' + error.code);
}
*/

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
      icon: "person"
    },
    {
      title: "Edit Profile",
      icon: "create"
    },
    {
      title: "Notification",
      icon: "notifications"
    },
    {
      title: "Change Password",
      icon: "lock"
    },
    {
      title: "Feedback",
      icon: "chatbubbles"
    },
    {
      title: "Frequently Asked Questions",
      icon: "help-circle"
    },
    {
      title: "Terms and Conditions",
      icon: "document"
    },
    {
      title: "Privacy Policy",
      icon: "briefcase"
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