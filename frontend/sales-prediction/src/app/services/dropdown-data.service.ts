import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../shared/models/customer.model';
import { Employee } from '../shared/models/employee.model';
import { Ship } from '../shared/models/ship.model';
import { Product } from '../shared/models/product.model';

@Injectable({
    providedIn: 'root',
})
export class DropdownDataService {
    constructor(private http: HttpClient) { }

    getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(`${environment.apiUrl}/employees`);
    }

    getShippers(): Observable<Ship[]> {
        return this.http.get<Ship[]>(`${environment.apiUrl}/shippers`);
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`${environment.apiUrl}/products`);
    }
}
