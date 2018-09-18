import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LibraryServiceService {

  private base_api_url : string = "https://dk9zsfj2cc.execute-api.us-east-1.amazonaws.com";
  catalog : Book[] = [];
  public books$ : Subject<Book> = new Subject();
  
  constructor(private http: HttpClient) {
    this.http.get<Book[]>(this.base_api_url + '/dev/lib').subscribe((res) => {
      res.forEach(element => {
        this.books$.next(new Book(element["author"],element["id"],element["thumbnail_url"],element["Title"]));
      });
    });
  }
}