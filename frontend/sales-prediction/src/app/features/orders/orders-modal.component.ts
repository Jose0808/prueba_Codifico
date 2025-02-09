import { Component, Inject, OnInit } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import { OrdersService } from './services/orders.service';

@Component({
  selector: 'app-orders-modal',
  templateUrl: './orders-modal.component.html',
})
export class OrdersModalComponent implements OnInit {
  orders: any[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { customerId: number },
    public dialogRef: MatDialogRef<OrdersModalComponent>,
    private ordersService: OrdersService
  ) { }

  ngOnInit() {
    this.ordersService.getOrdersByCustomer(this.data.customerId).subscribe((data) => {
      this.orders = data;
    });
  }
}
