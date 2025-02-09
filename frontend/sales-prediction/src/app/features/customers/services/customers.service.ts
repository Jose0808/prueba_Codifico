import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Customer {
    customerName: string;
    lastOrderDate: Date;
    nextPredictedOrder: Date;
}

@Injectable({
    providedIn: 'root',
})
export class CustomerService {
    private apiUrl = `${environment.apiUrl}/customers`;

    constructor(private http: HttpClient) { }

    getCustomers(): Observable<Customer[]> {
        return this.http.get<Customer[]>(this.apiUrl +"/sales-prediction");
    }
}
