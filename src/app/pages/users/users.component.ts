import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  search: string = "";
  users: any;
  constructor(private _userService: UserService,) { }

  ngOnInit(): void {
    this._userService.getUsers().toPromise()
      .then((res: any) => {
        console.log(res)
        this.users = res.users
      })
      .catch(err => console.log(err))
  }

}
