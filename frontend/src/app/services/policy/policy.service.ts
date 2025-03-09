import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private http: HttpClient) { }
  getPolicies(filters: any) {
    return this.http.get('https://insuranceproject-backend.onrender.com/api/policies', { params: filters });
  }
}
