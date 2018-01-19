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
  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform, private appMinimize: AppMinimize, private hotspot: Hotspot, public alertCtrl: AlertController) {
    this.platform.registerBackButtonAction(() => {
      this.appMinimize.minimize();
    });
  }

  ionViewDidLoad() {
    if (this.platform.is('cordova')) {
      let SSID = 'Hackthon' + Math.round(Math.random() * 100) + 'Wifi' + Math.round(Math.random() * 100);
      let mode = 'WPA_PSK';
      let password = Math.round(Math.random() * 100) + 'Gs' + Math.round(Math.random() * 100) + '&@' + Math.round(Math.random() * 100);
      this.hotspot.createHotspot(SSID, mode, password)
        .then((response) => {
          this.logs = response;
          console.log(".........hotspot..........", response);
        });
    }

  }

  stopHotspot() {
    if (this.platform.is('cordova')) {
      this.hotspot.stopHotspot()
        .then((response: boolean) => {
          this.logs = response;
          console.log(".........hotspot..........", response);
        });
    }
  }

  stopHotspot1() {
      let prompt = this.alertCtrl.create({
        title: 'Hackton12312@',
        message: "Enter a name for this new album you're so keen on adding",
        inputs: [
          {
            name: 'title',
            placeholder: 'Title'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Save',
            handler: Password => {

              console.log("password", Password.title, 'Hackton12312@');
              

            }
          }
        ]
      });
      prompt.present();
  }


}
