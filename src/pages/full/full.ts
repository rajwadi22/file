import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';
import { File } from '@ionic-native/file';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Slides } from 'ionic-angular';
declare var window;
import { AndroidFullScreen } from '@ionic-native/android-full-screen';

/**
 * Generated class for the FullPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-full',
  templateUrl: 'full.html',
})
export class FullPage {
  @ViewChild(Slides) slides : Slides;
  path=[
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg"
  ];
  

  index:number=0;
  i:number;
  constructor(private androidFullScreen: AndroidFullScreen,private transfer: FileTransfer,private file: File,private socialSharing : SocialSharing,public navCtrl: NavController, public navParams: NavParams,private toast : Toast) {
    this.index = navParams.get('index');
    this.androidFullScreen.immersiveMode();
   
  }

  sildeChanged(){
    this.i = this.slides.getActiveIndex();
    console.log(this.i);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FullPage');
  }
 
  onSet(){
    window.plugins.wallpaper.setImage('assets/imgs/'+this.path[this.i]);
    this.toast.show(`wallpaper set`, '5000', 'center').subscribe(
      toast => {
        console.log(toast);
      }
    );
  
  }
  onSave(){    
     let imageName = this.path[this.i]   
     const fileTransfer: FileTransferObject = this.transfer.create();
    const url =encodeURI(this.file.applicationDirectory+'www/assets/imgs/'+imageName);
    this.file.checkDir(this.file.externalRootDirectory, 'Black')
    .then( (entry) => {
      fileTransfer.download(url, this.file.externalRootDirectory+'Black/'+imageName).then((entry) => {
        this.toast.show('Download Complete', '5000', 'center').subscribe(
          toast => {
            console.log(toast);
          }
        );

        }, (error) => {
          this.toast.show(JSON.stringify(error), '5000', 'center').subscribe(
            toast => {
              console.log(toast);
            }
          );

        });
    })
    .catch((error) => {
      let result = this.file.createDir(this.file.externalRootDirectory,'Black',true);
      result.then( data => {
        fileTransfer.download(url, this.file.externalRootDirectory+'Black/'+imageName).then((entry) => {

          this.toast.show('Download Complete', '5000', 'center').subscribe(
            toast => {
              console.log(toast);
            }
          );

           }, (error) => {
            
            this.toast.show(JSON.stringify(error), '5000', 'center').subscribe(
              toast => {
                console.log(toast);
              }
            );
           });
        
      }).catch( error => {

        this.toast.show(JSON.stringify(error), '5000', 'center').subscribe(
          toast => {
            console.log(toast);
          }
        );

      });
    });
      
  }
  onShare() { 
    let imageName = this.path[this.i];
    const ROOT_DIRECTORY = 'file:///sdcard//';
    const downloadFolderName = 'DownloadFolder';
    
    //Create a folder in memory location
    this.file.createDir(ROOT_DIRECTORY, downloadFolderName, true)
      .then((entries) => {
 
        //Copy our asset/img/FreakyJolly.jpg to folder we created
        this.file.copyFile(this.file.applicationDirectory + "www/assets/imgs/", imageName, ROOT_DIRECTORY + downloadFolderName + '//', imageName)
          .then((entries) => {
 
            //Common sharing event will open all available application to share
            this.socialSharing.share("The Black","Subject", ROOT_DIRECTORY + downloadFolderName + "/" + imageName, imageName)
              .then((entries) => {
              
              })
            })
          });
        
  }

}






 

