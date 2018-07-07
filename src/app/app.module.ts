import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { Toast } from '@ionic-native/toast';

import { SocialSharing } from '@ionic-native/social-sharing';
import { FullPage } from '../pages/full/full';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FullPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FullPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    File,
    FileTransfer,
    Toast,
    SocialSharing,
    AndroidFullScreen
  ]
})
export class AppModule {}
