import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'customers', pathMatch: 'full' },
    { path: 'customers', loadChildren: () => import('./features/customers/customers.module').then(m => m.CustomersModule) },
    { path: 'orders', loadChildren: () => import('./features/orders/orders.module').then(m => m.OrdersModule) },
    { path: 'new-order', loadChildren: () => import('./features/new-order/new-order-modal.module').then(m => m.NewOrderModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
