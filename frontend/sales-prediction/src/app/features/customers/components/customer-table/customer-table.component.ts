import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-customer-table',
    templateUrl: './customer-table.component.html'
})
export class CustomerTableComponent {
    @Input() customers: any[] = [];
}
