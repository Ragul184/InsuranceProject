import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private http: HttpClient) { }
  getPolicies(filters: any) {
    return this.http.get('http://localhost:8080/api/policies', { params: filters });
  }
}
