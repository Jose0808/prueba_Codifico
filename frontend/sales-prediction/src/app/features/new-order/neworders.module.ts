import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { OrderListComponent } from '../orders/components/order-list/order-list.component';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    OrderListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ]
})
export class OrdersModule { }
