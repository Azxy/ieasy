import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatastorageProvider } from "../../providers/datastorage/datastorage";

/**
 * Generated class for the RewardzPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rewardz',
  templateUrl: 'rewardz.html',
})
export class RewardzPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public datastorageProvider: DatastorageProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RewardzPage');
  }

}
