import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './book';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LibraryServiceService {

  private base_api_url : string = "https://dk9zsfj2cc.execute-api.us-east-1.amazonaws.com";
  catalog : Book[] = [];
  
  constructor(private http: HttpClient) { }

  getLibrary() {
    var books = [];
    this.http.get(this.base_api_url + '/dev/lib').subscribe((res) => {
      if(res.length !== 0) {
        for(var i=0; i<res.length;i++) {
          books.push(new Book(res[i]["author"],res[i]["id"],res[i]["thumbnail_url"],res[i]["Title"]));
        }
      }
      this.catalog =  books;
    });
  }
}