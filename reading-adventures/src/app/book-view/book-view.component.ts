import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library-service.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {

  constructor(private _libraryService: LibraryService) { }

  ngOnInit() {
  }

}
