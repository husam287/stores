import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound-component',
  templateUrl: './notfound-component.component.html',
  styleUrls: ['./notfound-component.component.scss']
})
export class NotfoundComponentComponent implements OnInit {

  @Input() text!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
