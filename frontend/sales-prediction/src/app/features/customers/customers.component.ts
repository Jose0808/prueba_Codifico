import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CustomerService } from 'src/app/services/customers.service';
import { Customer } from 'src/app/shared/models/customer.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { NewOrderModalComponent } from '../new-order/new-order-modal.component';
import { OrdersModalComponent } from '../orders/orders-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-sales-date-prediction',
    templateUrl: './customers.component.html',
    styleUrl: './customers.component.scss',
})

export class CustomersComponent implements AfterViewInit {
    displayedColumns: string[] = ['customerName', 'lastOrderDate', 'nextPredictedOrder', 'actions'];
    customers:MatTableDataSource<Customer> = new MatTableDataSource<Customer>();

    @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
    @ViewChild(MatSort) sort: MatSort = new MatSort();

    constructor(private customerService: CustomerService, private dialog: MatDialog) {
    }

    ngAfterViewInit() {
        this.customerService.getSalesPrediction().subscribe({
            next: (data) => {
                this.customers = new MatTableDataSource(data);
                this.customers.paginator = this.paginator;
                this.customers.sort = this.sort;
            },
            error: (error) => console.error('Error fetching customers:', error),
        });
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
        this.customers.filter = filterValue;
        if (this.customers.paginator) {
            this.customers.paginator.firstPage();
        }
    }

    viewOrders(customer: Customer) {
        this.dialog.open(OrdersModalComponent, {
            width: '1000px',
            data: customer, // Pasamos el cliente al modal
        });
        console.log('Viewing orders for', customer);
    }

    newOrder(customer: Customer) {
        this.dialog.open(NewOrderModalComponent, {
            width: '1000px',
            data: customer, // Pasamos el cliente al modal
        });
        console.log('Creating new order for', customer);
    }
}
