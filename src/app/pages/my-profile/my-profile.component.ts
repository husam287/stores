import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { systemMessageService } from 'src/app/utils/toastr';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  userData: any
  totalItemsNumber!: number;
  constructor(private _userService: UserService, private _sysMsg: systemMessageService) { }

  ngOnInit(): void {
    this._userService.getMyInfo().toPromise()
      .then(res => {
        this.userData = res;
        console.log(this.userData)
      })
      .catch(err => this._sysMsg.showError(err))
  }

}
