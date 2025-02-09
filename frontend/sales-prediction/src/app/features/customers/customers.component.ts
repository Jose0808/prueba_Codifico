import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customers.service';
import { Customer } from 'src/app/shared/models/customer.model';
import { CustomersModule } from './customers.module';

@Component({
    selector: 'app-sales-date-prediction',
    templateUrl: './customers.component.html',
    styleUrl: './customers.component.scss'
})

export class CustomersComponent implements OnInit {
    displayedColumns: string[] = ['customerName', 'lastOrderDate', 'nextPredictedOrder', 'actions'];
    customers: CustomersModule[] = [];

    constructor(private customerService: CustomerService) { }

    ngOnInit(): void {
        this.customerService.getSalesPrediction().subscribe({
            next: (data) => {
                console.log('Data received:', data);
                this.customers = data;
            },
            error: (error) => console.error('Error fetching customers:', error),
        });
    }

    viewOrders(customer: Customer) {
        console.log('Viewing orders for', customer);
    }

    newOrder(customer: Customer) {
        console.log('Creating new order for', customer);
    }
}
