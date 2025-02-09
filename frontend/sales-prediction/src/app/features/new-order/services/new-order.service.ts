import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewOrder } from '../../../shared/models/new-order.model';

@Injectable({
    providedIn: 'root'
})
export class NewOrderService {
    private apiUrl = '/api/new-order';

    constructor(private http: HttpClient) { }

    createNewOrder(order: NewOrder): Observable<any> {
        return this.http.post<any>(this.apiUrl, order);
    }
}
