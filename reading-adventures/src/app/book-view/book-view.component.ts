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
    console.log('constructed');
    this._libraryService.books$.subscribe((value) => {
      this.books.push(value); 
    });
  }

  ngOnInit() {
    console.log('init-ed');
  }

  ngOnDestroy() {
    console.log('destroyed');
    //this._libraryService.books$.unsubscribe();
  }
}
