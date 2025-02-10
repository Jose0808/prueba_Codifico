import { ChangeDetectorRef, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Customer } from 'src/app/shared/models/customer.model';
import { Order } from 'src/app/shared/models/order.model';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-orders-modal',
  templateUrl: './orders-modal.component.html',
  styleUrl: './orders-modal.component.scss',
})
export class OrdersModalComponent implements OnInit {
  displayedColumns: string[] = ['orderId', 'RequiredDate', 'shippedDate', 'shipName', 'shipAddress', 'shipCity'];
  orders: MatTableDataSource<Order> = new MatTableDataSource<Order>();

  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  constructor(
    @Inject(MAT_DIALOG_DATA) public customer: Customer,
    public dialogRef: MatDialogRef<Order>,
    private ordersService: OrdersService
  ) { }

  ngOnInit() {
    console.log(this.customer.customerId)
    this.ordersService.getOrdersByCustomer(this.customer.customerId).subscribe((data) => {
      this.orders = new MatTableDataSource(data);
      this.orders.paginator = this.paginator;
      this.orders.sort = this.sort;
    });
  }
}
