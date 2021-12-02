import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user = null;
  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.user$.subscribe(res => {
      this.user = res
    })
  }

}
