import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public customer_details;
  constructor() { }
  public setCustomerDetails(value: any) {
    this.customer_details = value;    
  }
}
