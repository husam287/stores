import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info-card',
  templateUrl: './user-info-card.component.html',
  styleUrls: ['./user-info-card.component.scss']
})
export class UserInfoCardComponent implements OnInit {
  @Input() name:string = ""
  @Input() phone:string = ""
  @Input() email:string = ""
  @Input() imageUrl:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
