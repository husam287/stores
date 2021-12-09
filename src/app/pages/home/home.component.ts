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
  search: string = ""
  isClearShow = false

  constructor(private _itemService: ItemService, private _sysMsg: systemMessageService,) { }

  ngOnInit(): void {
    this._getItems();
  }

  private _getItems(search?: string) {
    this._itemService.getAllItems(search).toPromise()
      .then((res: any) => {
        let userId = Number(localStorage.getItem('userId'));
        this.items = res?.items?.filter((item: any) => item?.creator_id !== userId)
      })
      .catch(err => this._sysMsg.showError(err))
  }

  clear() {
    this.isClearShow = false
    this._getItems();
  }
  onSearch() {
    console.log(this.search)
    this._getItems(this.search);
    this.isClearShow = true;
  }
}
