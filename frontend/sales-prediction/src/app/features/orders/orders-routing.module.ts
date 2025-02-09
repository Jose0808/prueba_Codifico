import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersModalComponent } from './orders-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [{ path: '', component: OrdersModalComponent }];

@NgModule({
  declarations: [
    OrdersModalComponent,
  ],
  imports: [
    MatDialogModule,
    MatTableModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
