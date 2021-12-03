import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() title: string = "";
  @Input() description: string = "";
  @Input() owner: string = "";
  @Input() imageUrl: string = "";

  @Input() isMyItem: boolean = false;

  isHidden = false;
  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {

  }

  onShow() {
    this.isHidden = false
  }
  onHide() {
    this.isHidden = true;
  }

}
