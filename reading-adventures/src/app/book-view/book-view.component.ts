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
    if(this.booksInMem()) {
      this.books = this.getBooksFromMem();
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
    if(!this.booksInMem()) {
      this.addBooksToMem();
    }
  }

  bookClicked() {
    if(!this.booksInMem()) {
      this.addBooksToMem();
    }
  }

  booksInMem() {
    if(localStorage.getItem("books") !== null) {
      return true;
    }
    else {
      return false;
    }
  }

  addBooksToMem() {
    localStorage.setItem("books",JSON.stringify(this.books));
  }

  getBooksFromMem() {
    return JSON.parse(localStorage.getItem("books"));
  }
}
