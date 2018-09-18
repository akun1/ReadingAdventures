import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../book';
import { LibraryServiceService } from '../library-service.service';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit, OnDestroy {

  private books : Book[] = [];

  constructor(private _libraryService: LibraryServiceService) {
    if(localStorage.getItem("books") !== null) {
      console.log('getting books from mem...');
      this.books = JSON.parse(localStorage.getItem("books"));
    }
    else {
      this._libraryService.books$.subscribe(
        (response) => { this.books.push(response); }
      );
    }
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    localStorage.setItem("books",JSON.stringify(this.books));
}
