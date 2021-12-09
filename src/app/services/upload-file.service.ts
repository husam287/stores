import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private storage: AngularFireStorage) { }

  uploadFile(uploadFile: File) {
    const file = uploadFile;
    console.log(file)
    const fileType = file.type.split('/')[1];
    const fileName = file.name.split(`.${fileType}`)[0];

    const filePath = `images/${fileName}_${new Date().getTime()}.${fileType}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    return task.snapshotChanges()
  }
}
