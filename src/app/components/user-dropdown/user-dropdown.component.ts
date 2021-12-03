import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.scss']
})
export class UserDropdownComponent implements OnInit {
  isMobile = window.innerWidth < 992;
  constructor(private _userService: UserService, private router:Router) { }

  ngOnInit(): void {

  }

  logout() {
    this._userService.user$.next(null)
    localStorage.clear()
    this.router.navigate(['/','login'])
  }
}
