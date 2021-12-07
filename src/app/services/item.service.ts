import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url = environment.URL;

  constructor(private http: HttpClient) { }

  add(item: any) {
    return this.http.get(`${this.url}/items`, { ...item })
  }

  edit(itemId: number, newBody: any) {
    return this.http.put(`${this.url}/items/${itemId}`, { ...newBody })
  }

  delete(itemId: number) {
    return this.http.delete(`${this.url}/items/${itemId}`)
  }

  share(itemId: number, quantity: number) {
    return this.http.post(`${this.url}/items/${itemId}/add`, { quantity })
  }

  getAllItems(search: string) {
    return this.http.get(`${this.url}/items?text=${search}`)
  }

  buyItem(itemId: number) {
    return this.http.post(`${this.url}/items/${itemId}/buy`, null)
  }
}
