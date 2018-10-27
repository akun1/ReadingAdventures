import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { BibleEntry } from './bible-entry';
declare function require(url: string);
let variable = require('../assets/bible.json');
let variable2 = require('../assets/jesus.png');

@Injectable({
  providedIn: 'root'
})
export class GetBibleService {
  private bible_file_name = "bible.json";
  public bible_entry$ = variable

  public jesus_image$ = variable2
  
  constructor(private http: HttpClient) {}
}