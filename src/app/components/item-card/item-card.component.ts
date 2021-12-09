import { Component, Input, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { systemMessageService } from 'src/app/utils/toastr';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() isMyItem: boolean = false;
  @Input() item: any;
  isHidden = false;

  constructor(private _itemService: ItemService, private _sysMsg: systemMessageService,) { }

  ngOnInit(): void {
  }

  onDelete() {
    this._itemService.delete(this.item?.id).toPromise()
      .then(res => {
        this._sysMsg.showSuccess('Deleted successfully!')
        this.item = null
      })
      .catch(err => this._sysMsg.showError(err))
  }

  onShow() {
    this.isHidden = false
  }
  onHide() {
    this.isHidden = true;
  }

  buy() {
    this._itemService.buyItem(this.item.id, this.item.quantity).toPromise()
      .then(res => {
        this._sysMsg.showSuccess("Buy Successfully!")
      })
      .catch(err => this._sysMsg.showError(err))
  }

  share() {
    this._itemService.share(this.item.id, this.item.quantity).toPromise()
      .then(res => {
        this._sysMsg.showSuccess("You shared this item to your profile successfully!")
      })
      .catch(err => this._sysMsg.showError(err))
  }
}
