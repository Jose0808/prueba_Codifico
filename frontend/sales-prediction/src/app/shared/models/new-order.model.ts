export interface NewOrder {
    customerId: number;
    empId: number;
    shipperId: number;
    shipName: string;
    shipAddress: string;
    shipCity: string;
    shipCountry: string;
    orderDate: string;
    requiredDate: string;
    shippedDate: string;
    freight: number;
    productId: number;
    unitPrice: number;
    quantity: number;
    discount: number;
}
