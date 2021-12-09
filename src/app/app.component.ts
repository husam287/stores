import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { LoaderService } from './utils/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'stores';
  loading = false
  
  constructor(private _userService: UserService, private _loaderService: LoaderService,) { }

  ngOnInit(): void {
    let token = localStorage.getItem('token')
    token && this._userService.user$.next(token)

    /** Loader Observable */
    this._loaderService.viewLoaderState.subscribe(res => {
      setTimeout(() => {
        this.loading = res;
      }, 0);
    })
  }
}
