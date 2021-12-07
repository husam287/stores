import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { StoreService } from 'src/app/services/store.service';
import { UserService } from 'src/app/services/user.service';
import { systemMessageService } from 'src/app/utils/toastr';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userInfo: any;
  store: any;
  constructor(
    private _userService: UserService,
    private sysMsg: systemMessageService,
    private router: Router,
    private _itemService: ItemService,
    private _storeService: StoreService
  ) { }

  async ngOnInit() {
    try {
      this.store = await this._storeService.viewMyStore().toPromise()
      this.userInfo = await this._userService.getMyInfo().toPromise()

    } catch (err) {
      this.sysMsg.showError(err)
    }

  }

}
