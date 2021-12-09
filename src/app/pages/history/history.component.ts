import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { systemMessageService } from 'src/app/utils/toastr';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  date = new Date()
  history: any;
  constructor(private _userService: UserService, private _sysMsg: systemMessageService,) { }

  ngOnInit(): void {
    this._userService.getMyHistory().toPromise()
      .then(res => {
        this.history = res
        console.log(res)
      })
      .catch(err => this._sysMsg.showError(err))
  }

}
