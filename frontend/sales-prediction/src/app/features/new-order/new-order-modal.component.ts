import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewOrderService } from '../new-order/services/new-order.service';

@Component({
  selector: 'app-new-order-modal',
  templateUrl: './new-order-modal.component.html',
})
export class NewOrderModalComponent {
  loading = true;
  orderForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { customerId: string },
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NewOrderModalComponent>,
    private ordersService: NewOrderService
  ) {
    this.orderForm = this.fb.group({
      product: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
    });
  }

  submitOrder() {
    if (this.orderForm.valid) {
      const newOrder = { ...this.orderForm.value, customerId: this.data.customerId };
      this.ordersService.createNewOrder(newOrder).subscribe(({
        next: () => {
          this.loading = false; // Finaliza la solicitud.
          this.dialogRef.close(true);
        },
        error: () => {
          this.loading = false; // Finaliza la solicitud en caso de error.
        },
      })
      );
    }
  }
}
