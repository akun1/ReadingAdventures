import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetBibleService {
  private base_api_url : string = "https://s3.amazonaws.com/reading-adventures-library/texts/";
  private bible_query = "Bible.json";
  public bible_text$ : Subject<string> = new Subject();
  
  constructor(private http: HttpClient) {
    this.http.get<string>(this.base_api_url + this.bible_query).subscribe((res) => {
      this.bible_text$.next(res);
    });
  }
}