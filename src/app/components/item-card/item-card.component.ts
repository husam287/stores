import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input('title') title: string = "";
  @Input('description') description: string = "";
  @Input('owner') owner: string = "";
  @Input('imageUrl') imageUrl: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
