import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Category } from './category.model';
import { Quote } from './quote.model';
import { AppConfig } from './../app.config';

@Injectable()
export class CategoryService {
    private baseUrl = this.config.apiUrl + '/api/category'; // web api URL
    constructor(private http: Http, private config: AppConfig) {}

    getCategories(): Observable<Category[]> {
        return this.http.get(this.baseUrl)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}