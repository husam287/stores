import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { systemMessageService } from 'src/app/utils/toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: any;
  constructor(private _itemService: ItemService, private _sysMsg: systemMessageService,) { }

  ngOnInit(): void {
    this._itemService.getAllItems().toPromise()
      .then(res => {
        this.items = res
        console.log(res)
      })
      .catch(err => this._sysMsg.showError(err))
  }

}
