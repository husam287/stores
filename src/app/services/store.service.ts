import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  url = environment.URL;
  constructor(private http: HttpClient) { }

  viewMyStore() {
    return this.http.get(`${this.url}/store/my`)
  }

  viewStore(storeId: number) {
    return this.http.get(`${this.url}/store/${storeId}`)
  }
}
