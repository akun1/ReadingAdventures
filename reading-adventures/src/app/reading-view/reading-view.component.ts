import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { GetBibleService } from '../get-bible.service';
import { BibleEntry } from '../bible-entry';

@Component({
  selector: 'app-reading-view',
  templateUrl: './reading-view.component.html',
  styleUrls: ['./reading-view.component.css']
})
export class ReadingViewComponent implements OnInit {

  id : string;
  currentBook : Book;
  book_entry;
  pageNumber : number = 1;
  numLinesPerPage : number = 30;
  page;

  constructor(private route: ActivatedRoute, private router: Router, private _bibleService: GetBibleService) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    var result = this.getBookWithId(this.id);
    if(result.title.length > 0) {
      this.currentBook = result;
      if(this.currentBook.title == "Bible") {
        if(this.currentBookEntryInMem()) {
          this.book_entry = this.getCurrentBookEntryFromMem();
          this.displayPage();
        }
        else {
          this._bibleService.bible_entry$.subscribe(
            (response) => {
              this.book_entry = response;
              this.addBookEntryToMem();
              this.displayPage();
            }
          );
        }
      }
    }
    else {
      alert('We are sorry, there was an error. Please try again later.');
      this.router.navigate(['/books']);
    }
  }

  getBookWithId(id) {
    var found_book : Book = new Book('','','','','');
    var arr = JSON.parse(localStorage.getItem("books"));
    arr.forEach(element => {
      if(element['id'] == id) {
        found_book = element;
        return;
      }
    });
    return found_book;
  }

  currentBookEntryInMem() {
    if(localStorage.getItem("current_book_entry") !== null) {
      return true;
    }
    else {
      return false;
    }
  }

  addBookEntryToMem() {
    localStorage.setItem("current_book_entry",JSON.stringify(this.book_entry));
  }

  getCurrentBookEntryFromMem() {
    return JSON.parse(localStorage.getItem("current_book_entry"));
  }

  displayPage() {
    if(this.book_entry !== null) {
      if(this.currentBook.title == "Bible") {
        this.page = this.book_entry.chapters[this.pageNumber-1];
        var tempPage;
        this.page.forEach(line => {
          tempPage += '<p class=\"line\">' + line + '</p>';
        });
        this.page = tempPage;
      }
    }
  }

  previousPage() {
    if(this.book_entry !== null) {
      if(this.currentBook.title == "Bible") {
        if(this.pageNumber < 2) {
          console.log('this is the first page!');
        }
        else {
          this.pageNumber--;
          this.displayPage();
          console.log(this.pageNumber);
        }
      }
    }
  }

  nextPage() {
    if(this.book_entry !== null) {
      if(this.currentBook.title == "Bible") {
        if(this.pageNumber == this.book_entry.chapters.length-1) {
          console.log('this is the last page!');
        }
        else {
          this.pageNumber++;
          this.displayPage();
          console.log(this.pageNumber);
        }
      }
    }
  }
}
