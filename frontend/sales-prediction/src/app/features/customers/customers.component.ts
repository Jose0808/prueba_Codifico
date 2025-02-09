import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-sales-date-prediction',
    templateUrl: './customers.component.html'
})
export class CustomerComponent implements OnInit {
    displayedColumns: string[] = ['customerName', 'lastOrderDate', 'nextPredictedOrder', 'actions'];
    dataSource = new MatTableDataSource<Customer>(CUSTOMER_DATA);

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    viewOrders(customer: Customer) {
        console.log('Viewing orders for', customer);
    }

    createOrder(customer: Customer) {
        console.log('Creating new order for', customer);
    }
}

export interface Customer {
    customerName: string;
    lastOrderDate: Date;
    nextPredictedOrder: Date;
}

const CUSTOMER_DATA: Customer[] = [
    { customerName: 'Customer AHPOP', lastOrderDate: new Date('2008-02-04'), nextPredictedOrder: new Date('2008-03-23') },
    { customerName: 'Customer AHXHT', lastOrderDate: new Date('2008-05-05'), nextPredictedOrder: new Date('2008-08-09') },
    // Agrega más datos según sea necesario...
];
