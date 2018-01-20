import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { DatastorageProvider } from "../../providers/datastorage/datastorage";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private network: Network, private datastorageProvider: DatastorageProvider) {
    this.network.onConnect()
      .subscribe((obj: any) => {
        this.datastorageProvider.setdataObj('ConnectedTime', obj);
        console.log(obj);
      });
    this.network.onDisconnect()
      .subscribe((obj: any) => {
        this.datastorageProvider.setdataObj('disconnectedTime', obj);
        console.log(obj);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
