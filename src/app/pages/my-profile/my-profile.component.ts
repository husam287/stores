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
      .then((res: any) => {
        this.userData = res;
        this.totalItemsNumber = res?.createdItems?.length + res?.sharedItems?.length
        console.log(this.userData)
      })
      .catch(err => this._sysMsg.showError(err))
  }

  addBalance() {
    let isConfirmed = confirm("Are you sure to add (100LE) to your balance?!")
    if (!isConfirmed) return

    let userId = Number(localStorage.getItem('userId'))
    this._userService.addBalance(userId, 100).toPromise()
      .then(res => {
        this._sysMsg.showSuccess("100LE added to your balance successfully!")
        this.userData.balance += 100
      })
      .catch(err => this._sysMsg.showError(err))
  }

}
