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

  constructor(public navCtrl: NavController, private geolocation: Geolocation) {
    this.getLoc();
  }

  getLoc() {
    console.log("<--Entering get location-->");
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      console.log("resp-->", resp);
      this.location = resp;
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      console.log("data-->", data);
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
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
