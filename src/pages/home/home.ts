import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FullPage } from '../full/full';
import { StatusBar } from '@ionic-native/status-bar';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private androidfullscreen : AndroidFullScreen,private statusBar: StatusBar,public navCtrl: NavController) {
    this.statusBar.overlaysWebView(true);
    this.statusBar.backgroundColorByHexString('black');
    this.androidfullscreen.showSystemUI();
  }

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
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "17.jpg",
    "18.jpg",
    "19.jpg",
    "20.jpg"
  ];
  onClick(i:number){
        console.log(i);
      this.navCtrl.push(FullPage,{
        index:i
      });
      }

}