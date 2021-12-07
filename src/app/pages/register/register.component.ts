import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { systemMessageService } from 'src/app/utils/toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _userService: UserService, private sysMsg: systemMessageService, private router: Router) { }

  ngOnInit(): void {
  }

  onSignup(form: NgForm) {
    console.log(form.value)
    this._userService.signup(form.value).toPromise()
      .then(res => {
        console.log(res)
        this.router.navigate(['/', 'login'])
      })
      .catch(err => this.sysMsg.showError(err))
  }
}
