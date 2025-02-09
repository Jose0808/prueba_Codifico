import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    OrderListComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class OrdersModule { }
