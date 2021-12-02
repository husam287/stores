import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.scss']
})
export class UserDropdownComponent implements OnInit {
  isMobile = window.innerWidth < 992;
  constructor() { }

  ngOnInit(): void {

  }

}
