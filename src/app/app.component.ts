import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'stores';
  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    let token = localStorage.getItem('token')
    token && this._userService.user$.next(token)
  }
}
