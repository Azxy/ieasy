import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { DatastorageProvider } from "../../providers/datastorage/datastorage";

import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private network: Network, public datastorageProvider: DatastorageProvider) {
    this.network.onConnect()
      .subscribe((obj: any) => {
        this.datastorageProvider.setdataObj('ConnectedTime', obj.timeStamp);
        console.log(obj);
      });
    this.network.onDisconnect()
      .subscribe((obj: any) => {
        this.datastorageProvider.setdataObj('disconnectedTime', obj.timeStamp);
        console.log(obj);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    // this.showLoading()
       this.navCtrl.setRoot(HomePage);
  }
}
