import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // posts: any[] = []
  constructor(private _httpClient: HttpClient) { }
  items:string[] = ["Product1", "Product2", "Product3"];
  getProducts(): Observable<any> {
    return this._httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }
}
