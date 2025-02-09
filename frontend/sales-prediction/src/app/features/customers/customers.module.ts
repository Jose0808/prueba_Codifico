import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerTableComponent } from './components/customer-table/customer-table.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerTableComponent,
    SearchFilterComponent,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatInputModule,
  ],
})
export class CustomersModule { }
