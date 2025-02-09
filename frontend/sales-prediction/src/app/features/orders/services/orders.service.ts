import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Order {
    id: number;
    date: string;
    amount: number;
}

@Injectable({
    providedIn: 'root',
})
export class OrdersService {
    private apiUrl = `${environment.apiUrl}/orders`;

    constructor(private http: HttpClient) { }

    getOrdersByCustomer(customerId: number): Observable<Order[]> {
        return this.http.get<Order[]>(`${this.apiUrl}/${customerId}`);
    }

    createOrder(payload: { customerId: number; product: string; quantity: number }): Observable<any> {
        return this.http.post(this.apiUrl, payload);
    }
}
