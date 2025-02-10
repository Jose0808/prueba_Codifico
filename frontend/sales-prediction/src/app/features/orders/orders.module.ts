import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './components/order-list/order-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    OrderListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class OrdersModule { }
