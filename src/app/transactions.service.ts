import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  searchKey = new Subject<string>()
  constructor(private _HttpClient:HttpClient) { }
  getData():Observable<any>{
    return this._HttpClient.get('http://localhost:3000/transactions');
  }
  getSpacific(id:string):Observable<any>{
    return this._HttpClient.get(`http://localhost:3000/transactions/${id}`);
  }
}
