import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewOrderModalComponent } from './new-order-modal.component';
import { NewOrderRoutingModule } from './new-order-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [NewOrderModalComponent],
  imports: [
    CommonModule,
    NewOrderRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class NewOrderModule { }  
