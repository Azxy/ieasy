import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot';
import { AppMinimize } from '@ionic-native/app-minimize';
import { NetworkInterface } from '@ionic-native/network-interface';

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

  data: any;
  logs: any = 'started';
  error: 'NA';

  wifiIPAddress: any;
  carrierIPAddress: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private platform: Platform, private appMinimize: AppMinimize,
    private hotspot: Hotspot, public alertCtrl: AlertController,
    private networkInterface: NetworkInterface) {
    this.platform.registerBackButtonAction(() => {
      this.appMinimize.minimize();
    });
  }

  networkInterfaceAddress() {
    this.wifiIPAddress = this.networkInterface.getWiFiIPAddress();
    this.carrierIPAddress = this.networkInterface.getCarrierIPAddress();
  }

  ionViewDidLoad() {
    if (this.platform.is('cordova')) {
      this.scanWifi();
    }
  }

  scanWifi() {
    this.hotspot.scanWifi().then((networks: Array<HotspotNetwork>) => {
      this.data = [];
      networks.forEach((x: any) => {
        if (x.SSID && x.SSID != "") {
          this.data.push(x);
        }
      });
      this.logs = networks;
    });
  }

  selectWifi(SSID) {
    if (this.platform.is('cordova')) {
      if (SSID === "ieasy") {
        this.hotspot.connectToWifi(SSID, 'ieasy123')
          .then((data) => {
            this.logs = data;
            alert("Connected Successfully!")
            this.networkInterfaceAddress();
          }, (error) => {
            this.error = error;
          });
      } else {
        this.selectWifi_pass(SSID);
      }
    }
  }

  selectWifi_pass(SSID) {
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
            }
          },
          {
            text: 'Save',
            handler: dataToSave => {
              this.error = dataToSave;
              this.hotspot.connectToWifi(SSID, dataToSave.password)
                .then((data) => {
                  this.logs = data;
                  this.networkInterfaceAddress();
                }, (error) => {
                  this.error = error;
                })

            }
          }
        ]
      });
      prompt.present();
    }
  }

}
