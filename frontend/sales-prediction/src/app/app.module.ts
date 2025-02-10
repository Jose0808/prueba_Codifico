import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar'
import { AppRoutingModule } from './app-routing.module';
import { CustomersComponent } from './features/customers/customers.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatDividerModule } from '@angular/material/divider';


import { OrdersModalComponent } from './features/orders/orders-modal.component';
import { NewOrderModalComponent } from './features/new-order/new-order-modal.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
    declarations: [
        AppComponent,
        CustomersComponent,
        OrdersModalComponent,
        NewOrderModalComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        MatToolbarModule,
        AppRoutingModule,
        MatTableModule,
        MatButtonModule,
        MatCardModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatIconModule,
        BrowserAnimationsModule,
        MatSortModule,
        MatPaginatorModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatDividerModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { } 
