import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.URL;
  user$ = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient) { }

  signup(values: any) {
    return this.http.post(`${this.url}/signup`, { ...values })
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
}
