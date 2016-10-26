import { Injectable } from '@angular/core';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';

@Injectable()
export class ToastService {
    constructor (
                    private toastyService:ToastyService, 
                    private toastyConfig: ToastyConfig
                ) 
    {
        this.toastyConfig.theme = 'material';
    }

    showToast(status: string, title: string, message: string, closeBtn: boolean, delay: number) {
        var toastOptions:ToastOptions = {
            title: title,
            msg: message,
            showClose: closeBtn,
            timeout: delay,
            theme: this.toastyConfig.theme
        };
        // show message by status
        switch (status) {
            case 'info':
                this.toastyService.info(toastOptions);
                break;
            case 'success':
                this.toastyService.success(toastOptions);
                break;
            case 'wait':
                this.toastyService.wait(toastOptions);
                break;
            case 'error':
                this.toastyService.error(toastOptions);
                break;
            case 'warning':
                this.toastyService.warning(toastOptions);
                break;
            default:
                this.toastyService.default(toastOptions);
                break;
        }
    }
}