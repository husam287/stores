import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sticky-note',
  templateUrl: './sticky-note.component.html',
  styleUrls: ['./sticky-note.component.scss']
})
export class StickyNoteComponent implements OnInit {

  @Input() header: string = ""
  @Input() icon: string = ""
  @Input() color: string = ""
  @Input() data: any

  constructor() { }

  ngOnInit(): void {
  }

}
