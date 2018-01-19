import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot';
import { AppMinimize } from '@ionic-native/app-minimize';

/**
 * Generated class for the ConsumerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consumer',
  templateUrl: 'consumer.html',
})
export class ConsumerPage {

  data: any = [{ SSID: 'AA' }, { SSID: 'BB' }];
  logs: any = 'started';
  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform, private appMinimize: AppMinimize, private hotspot: Hotspot, public alertCtrl: AlertController) {
    this.platform.registerBackButtonAction(() => {
      this.appMinimize.minimize();
    });
  }

  ionViewDidLoad() {
    if (this.platform.is('cordova')) {
      this.hotspot.scanWifi().then((networks: Array<HotspotNetwork>) => {
        this.data = networks;
        this.logs = networks;
        console.log(".........hotspot..........", JSON.stringify(networks));
      });
    }

  }

  selectWifi(SSID) {
    if (this.platform.is('cordova')) {
      let prompt = this.alertCtrl.create({
        title: SSID,
        message: "Fetch the secure password",
        inputs: [
          {
            name: 'password',
            placeholder: 'password'
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
            handler: dataToSave => {

              console.log("password", dataToSave.password, SSID);
              this.hotspot.connectToWifi(SSID, dataToSave.password)
                .then((data) => {

                  this.logs = data;
                  console.log(".........hotspot..........", data);
                }, (error) => {
                  console.log(".........hotspot..........", error);
                })

            }
          }
        ]
      });
      prompt.present();

    }
  }

}
