import { Component } from '@angular/core';
import { ToastService } from '../../../services/ui/toast.service';
import { TableOptions, TableColumn, ColumnMode} from 'angular2-data-table';
import { AuthenticationService } from '../../../services/user/auth.service';
import { User } from '../../../models/User';

@Component({
    selector: 'state-template',
    template: require('./user.template.html'),
    providers: [AuthenticationService, ToastService]
})
export class UserComponent {
    users:User [];
    temp: User [];
    nullRow = [];
    justInit: boolean = true;
    val: string = '';
    total: number = 0;
    options = new TableOptions({
        columnMode: ColumnMode.force,
        loadingIndicator: true,
        headerHeight: 50,
        footerHeight: 50,
        externalPaging: true,
        limit: 10,
        scrollbarH: true,
        columns: [
            new TableColumn({ name: 'Id' }),
            new TableColumn({ name: 'Name' }),
            new TableColumn({ name: 'Email' })
        ]
    });
    constructor (private userService: AuthenticationService, private toastService: ToastService) {
        console.log('User Component was loaded');
        this.userService.getUsers()
            .subscribe(
                data => this.users = data.users,
                err => {
                        this.toastService.showToast('error', 'System Error', err, true, 3000);
                },
                () => {
                        this.page(this.users);
                        this.temp = this.users;
                }
            );
    }

    page(tempVal) {
        let len = (this.total > 1) ? this.total : tempVal.length;
        if(tempVal.length === 0){
            this.userService.getUsers()
            .subscribe(
                data => {
                    this.options.count = data.users.length;
                    let start = this.options.offset * this.options.limit;
                    let end = start + this.options.limit;
                    // for (let i = start; i < end; i++) {
                    //     this.users[i] = data.users[i];
                    // }
                });
        }else{
            this.options.count = len;
            let start = this.options.offset * this.options.limit;
            let end = start + this.options.limit;
            // for (let i = start; i < end; i++) {
            //     this.users[i] = tempVal[i];
            // }
        }
    }

    updateFilter(val) {
        this.justInit = false;
        this.options.offset = 0;
        let temp = this.temp.filter(function(d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.users = temp;
        this.total = temp.length;
        this.page(this.users);
    }

    onPage({ offset, limit, count }) {
        if(this.justInit){
            this.page(this.nullRow);
        }else{
            this.page(this.users);
        }
    }

}