import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LibraryServiceService {

  constructor(private http: HttpClient) { }

  getLibrary() {
    return this.http.get('https://dk9zsfj2cc.execute-api.us-east-1.amazonaws.com/dev/lib');
  }
  
}
