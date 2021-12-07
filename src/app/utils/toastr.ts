import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class systemMessageService {

    constructor(private toastr: ToastrService) { }

    showSuccess(message: any) {
        this.toastr.success(message, undefined, { progressBar: true, progressAnimation: 'decreasing', timeOut: 3000 })
    }
    showError(err: any) {
        console.log("Catched Error => ", err)
        this.toastr.error(err?.error?.error?.details || err?.error?.error?.message || err?.message || "UNEXPECTED_ERROR", undefined, { progressBar: true, progressAnimation: 'decreasing', timeOut: 3000 })
    }
}