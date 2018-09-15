import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LibraryServiceService {

  private base_api_url : string = "https://dk9zsfj2cc.execute-api.us-east-1.amazonaws.com";

  constructor(private http: HttpClient) { }

  getLibrary() {
    return this.http.get(this.base_api_url + '/dev/lib');
  }
}
