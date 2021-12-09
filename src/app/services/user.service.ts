import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = environment.URL;
  user$ = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient) { }

  signup(values: any) {
    return this.http.post(`${this.url}/signup`, { ...values, image: "https://www.everblazing.org/wp-content/uploads/2017/06/avatar-372-456324-300x300.png" })
  }

  login(values: any) {
    return this.http.post(`${this.url}/login`, { ...values })
  }

  addBalance(userId: number, amount: number) {
    return this.http.post(`${this.url}/users/${userId}/addBalance`, { amount })
  }

  getMyHistory() {
    return this.http.get(`${this.url}/myHistory`)
  }

  getMyInfo() {
    return this.http.get(`${this.url}/info`)
  }

  getUsers() {
    return this.http.get(`${this.url}/users`)
  }

  getUser(userId: number) {
    return this.http.get(`${this.url}/users/${userId}`)
  }
}
