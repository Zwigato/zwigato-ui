import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, catchError } from "rxjs";
import {API_URL_RESTAURANT_LISTING} from 'src/app/constants/url';

@Injectable({
    providedIn : 'root'
})
export class RestaurantService{

    private apiUrl = API_URL_RESTAURANT_LISTING+'/restaurant/fetchAllRestaurants';

    constructor(private http: HttpClient){}

    getAllRestaurants(): Observable<any> {
        return this.http.get<any>(this.apiUrl)
        .pipe(catchError(this.handleError)
        )
    }
    private handleError(error : HttpErrorResponse): any {
        console.error('An error occurred', error);
    }
}