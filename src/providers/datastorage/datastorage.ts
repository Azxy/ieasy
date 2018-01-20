import { Injectable } from '@angular/core';

/*
  Generated class for the DatastorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatastorageProvider {

  dataObj: any = {};

  constructor() {
    console.log('Hello DatastorageProvider Provider');
  }

  setdataObj(key:string, value: any) {
    this.dataObj[key] = value;
  }

  getdataObj(key:string) {
    return this.dataObj[key];
  }

  getdataCounsumed(): any{
    return this.dataObj.ConnectedTime && this.dataObj.disconnectedTime ? (this.dataObj.ConnectedTime - this.dataObj.disconnectedTime)*0.001 : 0;
  }

  getdataUsed(): any{
    return this.dataObj.ConnectedTime && this.dataObj.disconnectedTime ?(this.dataObj.ConnectedTime - this.dataObj.disconnectedTime)*0.001 : 0;
  }

}
