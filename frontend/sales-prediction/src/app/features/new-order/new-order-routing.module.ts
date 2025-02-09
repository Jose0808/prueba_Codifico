import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewOrderModalComponent } from './new-order-modal.component';

const routes: Routes = [{ path: '', component: NewOrderModalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewOrderRoutingModule { }
