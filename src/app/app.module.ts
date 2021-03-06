import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AppMinimize } from '@ionic-native/app-minimize';
import { Hotspot } from '@ionic-native/hotspot';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClient } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ConsumerPage } from '../pages/consumer/consumer';
import { CreatorPage } from '../pages/creator/creator';
import { NetworkInterface } from '@ionic-native/network-interface';
import { Network } from '@ionic-native/network';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from "../pages/login/login";
import { RewardzPage } from "../pages/rewardz/rewardz";
import { LoginPageModule } from "../pages/login/login.module";
import { ConsumerPageModule } from "../pages/consumer/consumer.module";
import { CreatorPageModule } from "../pages/creator/creator.module";
import { RewardzPageModule } from "../pages/rewardz/rewardz.module";
import { DatastorageProvider } from '../providers/datastorage/datastorage';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    LoginPageModule,
    ConsumerPageModule,
    CreatorPageModule,
    RewardzPageModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ConsumerPage,
    CreatorPage,
    RewardzPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppMinimize,
    Hotspot,
    Geolocation,
    NetworkInterface,
    Network,
    HttpClient,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DatastorageProvider
  ]
})
export class
  AppModule { }
