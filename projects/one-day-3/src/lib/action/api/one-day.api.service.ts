import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class OneDayDataService {
  constructor() {}

  getData() {
    return new Promise((resolve, reject) => {
      axios.get('/assets/data/network.json').then(d => {
        resolve(d.data);
      });
    });
  }
}
