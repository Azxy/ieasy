import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot';
import { AppMinimize } from '@ionic-native/app-minimize'

/**
 * Generated class for the CreatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-creator',
  templateUrl: 'creator.html',
})
export class CreatorPage {

  data: any = [{ SSID: 'AA' }, { SSID: 'BB' }];
  logs: any = 'started';
  error: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform, private appMinimize: AppMinimize, private hotspot: Hotspot, public alertCtrl: AlertController) {
    this.platform.registerBackButtonAction(() => {
      this.appMinimize.minimize();
    });
  }

  ionViewDidLoad() {
    this.startHotspot();
  }

  startHotspot() {
    if (this.platform.is('cordova')) {
      let SSID = 'ieasy';
      let mode = 'WPA_PSK';
      let password = 'ieasy123';
      this.hotspot.createHotspot(SSID, mode, password)
        .then((response) => {
          this.logs = response;
        });
    }
  }

  stopHotspot() {
    if (this.platform.is('cordova')) {
      this.hotspot.stopHotspot()
        .then((response: boolean) => {
          this.logs = response;
        });
    }
  }

}
