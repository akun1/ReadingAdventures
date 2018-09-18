import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { LibraryServiceService } from '../library-service.service';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {

  private books : Book[] = [];

  constructor(private _libraryService: LibraryServiceService) {
    this._libraryService.books$.subscribe((value) => {
      this.books.push(value); 
    });
  }

  ngOnInit() {}

}
