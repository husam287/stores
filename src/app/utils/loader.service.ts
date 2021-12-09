import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loader$ = new Subject<boolean>();

  private _stackOfLoader: boolean[] = [];
  constructor() { }


  public get viewLoaderState(): Subject<boolean> {
    return this.loader$
  }

  showLoader() {
    this._stackOfLoader.push(true)
    this.loader$.next(true);
  }

  hideLoader() {
    this._stackOfLoader.pop()
    this.loader$.next(false)
  }

}
