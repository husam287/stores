import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { systemMessageService } from 'src/app/utils/toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _userService: UserService, private router: Router, private sysMsg: systemMessageService) { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm) {
    this._userService.login(form.value).toPromise()
      .then((res: any) => {
        console.log(res)
        this.router.navigate(['/'])
        localStorage.setItem('token', res.token)
        localStorage.setItem('userId', res.user.id)
        this._userService.user$.next(res.token)
      })
      .catch(err => this.sysMsg.showError(err))
  }
}
