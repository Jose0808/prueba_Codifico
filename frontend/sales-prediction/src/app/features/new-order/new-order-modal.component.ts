import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewOrder } from 'src/app/shared/models/new-order.model';
import { Customer } from 'src/app/shared/models/customer.model';
import { DropdownDataService } from '../../services/dropdown-data.service';
import { Employee } from 'src/app/shared/models/employee.model';
import { Ship } from 'src/app/shared/models/ship.model';
import { Product } from 'src/app/shared/models/product.model';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-new-order-modal',
  templateUrl: './new-order-modal.component.html',
  styleUrl: './new-order-modal.component.scss',
  providers: [{ provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }],
})

export class NewOrderModalComponent implements OnInit {
  orderForm!: FormGroup;
  loading = true;

  employees: Employee[] = [];
  shippers: Ship[] = [];
  products: Product[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public customer: Customer,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<NewOrderModalComponent>,
    private dropdownDataService: DropdownDataService,
    private ordersService: OrdersService
  ) { }

  ngOnInit(): void {

    this.initializeForm();
    this.loadDropdownData();


  }

  private initializeForm(): void {
    this.orderForm = this.fb.group({
      // Sección "Order"
      customerId: [this.customer.customerId],
      empId: ['', Validators.required], 
      shipperId: ['', Validators.required],
      shipName: ['', Validators.required],
      shipAddress: ['', Validators.required],
      shipCity: ['', Validators.required], 
      shipCountry: ['', Validators.required],
      orderDate: ['', Validators.required],
      requiredDate: ['', Validators.required], 
      shippedDate: ['', Validators.required], 
      freight: ['', [Validators.required, Validators.min(0)]], 
      productId: ['', Validators.required],
      unitPrice: ['', [Validators.required, Validators.min(0)]], 
      qty: ['', [Validators.required, Validators.min(1)]],
      discount: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
    });
  }

  private loadDropdownData(): void {
    this.dropdownDataService.getEmployees().subscribe((data) => {
      this.employees = data;
    });

    this.dropdownDataService.getShippers().subscribe((data) => {
      this.shippers = data;
    });

    this.dropdownDataService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  saveOrder() : void {
    console.log(this.orderForm)
    if (this.orderForm.valid) {
    console.log(this.orderForm)
      const newOrder: NewOrder = this.orderForm.value;
      console.log(newOrder)

      // Llamada al servicio para guardar la orden
      this.ordersService.createNewOrder(newOrder).subscribe({
        next: (response) => {
          console.log('Order created successfully:', response);
          this.dialogRef.close(response); 
        },
        error: (err) => {
          console.error('Error creating order:', err);
        },
      });
    } else {
      console.warn('Form is invalid:', this.orderForm.errors);
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
