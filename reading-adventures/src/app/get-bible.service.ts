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
  bible_text;
  public books$ = new Subject();
  
  constructor(private http: HttpClient) {
    this.http.get(this.base_api_url + 'p=Jn3:1-35').subscribe((res) => {
      this.bible_text = res;
    });
  }
}