import { Location } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { UploadFileService } from 'src/app/services/upload-file.service';
import { systemMessageService } from 'src/app/utils/toastr';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  selectedFile!: File;

  constructor(
    private location: Location,
    private _itemService: ItemService,
    private _sysMsg: systemMessageService,
  ) { }

  ngOnInit(): void {
  }

  onAddItem(form: NgForm) {
    let result = form.value
    result['image'] = "https://picsum.photos/400"
    this._itemService.add(result).toPromise()
      .then(res => {
        this._sysMsg.showSuccess("Item Added Successfully!")
        this.location.back()
      })
      .catch(err => this._sysMsg.showError(err))
  }

  chooseFile(event: any) {
    let file: File = event.target.files[0];
    this.selectedFile = file
  }

}

