import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(form:NgForm){
    console.log(form)
    this._userService.user$.next(true)
    this.router.navigate(['/'])
  }
}
