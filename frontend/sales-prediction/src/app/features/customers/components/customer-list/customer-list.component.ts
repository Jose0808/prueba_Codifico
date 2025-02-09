import { Component, OnInit } from '@angular/core';
import { CustomerService, Customer } from '../../services/customers.service';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  loading = true;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.customerService.getCustomers().subscribe({
      next: (data: Customer[]) => { 
        console.log(data);
        this.customers = data;
        this.loading = false;
      },
      error: () => (this.loading = false),
    });
  }
}
