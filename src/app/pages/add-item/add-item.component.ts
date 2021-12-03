import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  selectedFile!: File;

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(form: NgForm) {
    let formData = new FormData()
    let result = form.value
    for (var key in result) {
      if (key === 'image') continue;
      formData.append(key, result[key]);
    }

    formData.append('image', this.selectedFile)
  }

  chooseFile(event: any) {
    let file: File = event.target.files[0];
    this.selectedFile = file
  }

}

