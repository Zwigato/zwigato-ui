import { Injectable } from '@angular/core';
import { API_URL_ORDER } from 'src/app/constants/url';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

    private apiUrl = API_URL_ORDER+'/order/saveOrder';

  constructor(private http: HttpClient) { }

  saveOrder(data : any) : Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
