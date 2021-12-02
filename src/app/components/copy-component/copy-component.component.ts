import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-copy-component',
  templateUrl: './copy-component.component.html',
  styleUrls: ['./copy-component.component.scss']
})
export class CopyComponentComponent implements OnInit {

  copied = false;
  @Input() dataToBeCopied: string = ""
  constructor() { }

  ngOnInit(): void {
  }

  copy() {
    navigator.clipboard.writeText(this.dataToBeCopied);
    this.copied = true;
    setTimeout(() => {
      this.copied = false
    }, 1000);
  }

}
