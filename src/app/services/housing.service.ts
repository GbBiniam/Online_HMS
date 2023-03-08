import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { IPropertyBase } from '../model/ipropertybase';
import { Property } from '../model/property';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  pid:number =0;
  constructor(private http: HttpClient) {}
  getProperty(id: number) {

    return this.getAllProperties().pipe(
      map((propertyArray) => {
        console.log(propertyArray)
        this.pid =id;
        var item = propertyArray.find(p=>p.Id==this.pid);//.find((p) => p.Id === id);
        return item;
      })
    );
  }

  getAllProperties(SellRent?: number): Observable<Property[]> {
    return this.http.get('data/properties.json').pipe(
      map((data) => {
        const propertiesArray: Array<Property> = [];
        const localProperties = JSON.parse(localStorage.getItem('newProp'));

        if (localProperties) {
          for (const id in localProperties) {
            if (SellRent) {
              if (
                localProperties.hasOwnProperty(id) &&
                localProperties[id].SellRent === SellRent
              ) {
                propertiesArray.push(localProperties[id]);
              }
            } else {
              propertiesArray.push(localProperties[id]);
            }
          }
        }

        for (const id in data) {
          if (SellRent) {
            if (data.hasOwnProperty(id) && data[id].SellRent === SellRent) {
              propertiesArray.push(data[id]);
            }
          } else {
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );
  }
}
