import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { CreatorPage } from '../creator/creator';
import { ConsumerPage } from '../consumer/consumer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  location: any;
  logs: any;
  error: any;

  constructor(public navCtrl: NavController, private geolocation: Geolocation) {
    this.getLoc();
  }

  getLoc() {
    console.log("<--Entering get location-->");
    this.geolocation.getCurrentPosition().then((resp) => {
      this.location = resp;
      this.logs = resp;
    }).catch((error) => {
      this.error = error;
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      this.logs = data;
    });
  }

  loadIEasyShare(){
    this.navCtrl.push(CreatorPage,{
      val: 'creator'
    })
  }

  loadIEasyConnect(){
    this.navCtrl.push(ConsumerPage,{
      val: 'consumer'
    })
  }
}
