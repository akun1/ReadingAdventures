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
  entirePrettyText : string;

  constructor(private route: ActivatedRoute, private router: Router, private _bibleService: GetBibleService) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    var result = this.getBookWithId(this.id);
    if(result.title.length > 0) {
      this.currentBook = result;
      if(this.currentBook.title == "Bible") {
        if(this.currentBookEntryInMem()) {
          this.book_entry = this.getCurrentBookEntryFromMem();
          this.displayBookText();
        }
        else {
          this._bibleService.bible_entry$.subscribe(
            (response) => {
              this.book_entry = response;
              this.addBookEntryToMem();
              this.displayBookText();
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

  displayBookText() {
    if(this.book_entry !== null) {
      if(this.currentBook.title == "Bible") {
        var tries = 0;
        while(tries < 3) {
          tries += 1;
          console.log(tries);
          try {
            var line = '';
            this.book_entry.chapters.forEach(element => {
              element.forEach(sentence => {
                line = '<p class=\"line\">' + sentence + '</p>';
                this.entirePrettyText += line;
                console.log(line);
              });
            });
            console.log('returning pretty text now!');
            return this.entirePrettyText;
          }
          catch(err) {
            return 'No content yet.';
          }
        }
      }
      return 'No content yet.'
    }
    else {
      return 'No content yet.';
    }
  }

}
