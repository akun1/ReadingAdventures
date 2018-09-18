import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { BibleEntry } from './bible-entry';

@Injectable({
  providedIn: 'root'
})
export class GetBibleService {
  private base_api_url : string = "https://s3.amazonaws.com/reading-adventures-library/texts/";
  private bible_query = "Bible.json";
  public bible_entry$ : Subject<BibleEntry> = new Subject();
  
  constructor(private http: HttpClient) {
    this.http.get<BibleEntry>(this.base_api_url + this.bible_query).subscribe((res) => {
        this.bible_entry$.next(new BibleEntry(res['name'],res['chapters']));
    });
  }
}