import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('token');

    let authorizedReq = req.clone({
      setHeaders:
      {
        'Authorization': `Bearer ${token}`,
      }
    });

    return next.handle(authorizedReq);
  }

}
