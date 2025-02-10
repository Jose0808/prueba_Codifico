import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewOrder } from '../shared/models/new-order.model';
import { Order } from '../shared/models/order.model';

@Injectable({
    providedIn: 'root',
})
export class OrdersService {
    private apiUrl = `${environment.apiUrl}/orders`;

    constructor(private http: HttpClient) { }

    getOrdersByCustomer(customerId: number): Observable<Order[]> {
        return this.http.get<Order[]>(`${this.apiUrl}/${customerId}`);
    }

    createNewOrder(order: NewOrder): Observable<any> {
        return this.http.post<any>(this.apiUrl, order);
    }
}
