import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetBibleService {

  private base_api_url : string = "http://getbible.net/json?";
  catalog : Book[] = [];
  public books$ : Subject<Book> = new Subject();
  
  constructor(private http: HttpClient) {
    this.http.get<Book[]>(this.base_api_url + 'p=Jn3:1-35').subscribe((res) => {
      res.forEach(element => {
        this.books$.next(new Book(element["author"],element["id"],element["thumbnail_url"],element["summary"],element["Title"]));
      });
    });
  }
}