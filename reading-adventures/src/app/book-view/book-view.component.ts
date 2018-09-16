import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { LibraryServiceService } from '../library-service.service';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {

  private books = [];

  constructor(private _libraryService: LibraryServiceService) {
    _libraryService.getLibrary();
    console.log(_libraryService.catalog);
  }

  ngOnInit() {}

}
