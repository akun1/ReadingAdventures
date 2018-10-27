import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { GetBibleService } from '../get-bible.service';
import { BibleEntry } from '../bible-entry';
import { HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  page;
  section_name;
  chapters;
  hidden : boolean = true;
  page1;
  page2;
  all_chapter_names;
  currentBookName = "Genesis";

  constructor(private route: ActivatedRoute, private router: Router, private _bibleService: GetBibleService) {}

  ngOnInit() {

    this.page1 = { book: "Genesis", chapter: 1 };
    this.page2 = { book: "Mark", chapter: 1 };


    this.id = this.route.snapshot.paramMap.get('id');
    var result = this.getBookWithId(this.id);
    if(result.title.length > 0) {
      this.currentBook = result;
      if(this.currentBook.title == "Bible") {
        this.hidden = false;
        if(this.currentBookEntryInMem()) {
          this.book_entry = this.getCurrentBookEntryFromMem();
          this.chapters = this.book_entry.chapters;
          this.displayPage();
          this.backToTop();
        }
        else {
          this.book_entry = this._bibleService.bible_entry$;
          this.addBookEntryToMem();
          this.section_name = this.book_entry["name"]
          this.chapters = this.book_entry["chapters"];
          this.displayPage();
          this.backToTop();
        }
      }
      this.displayPage();
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
        var tempPage : String[] = [];
        this.section_name = this.book_entry["name"]
        this.page.forEach(line => {
          tempPage.push(line);
        });
        this.page = tempPage;
      }
    }
  }

  switchText() {
    var element = document.getElementById("entire-genesis");
    element.classList.toggle("text-hidden");
    var element = document.getElementById("entire-mark");
    element.classList.toggle("text-hidden");
    if(this.currentBookName == "Mark") {
      this.currentBookName = "Genesis"
    } else {
      this.currentBookName = "Mark"
    }
  }

  previousPage() {
    // if(this.book_entry !== null) {
    //   if(this.currentBook.title == "Bible") {
    //     if(this.pageNumber < 2) {
    //       alert('This is the first page of '+ this.currentBook.title +'!');
    //     }
    //     else {
    //       this.pageNumber--;
    //       this.displayPage();
    //     }
    //   }
    // }

    if(this.page1["chapter"] != 1) {
      this.page1["chapter"]--;
    }

  }

  nextPage() {
    // if(this.book_entry !== null) {
    //   if(this.currentBook.title == "Bible") {
    //     if(this.pageNumber == this.book_entry.chapters.length) {
    //       alert('This is the last page of '+ this.currentBook.title +'!');
    //     }
    //     else {
    //       this.pageNumber++;
    //       this.displayPage();
    //     }
    //   }
    // }

    this.page1["chapter"]++;

  }

  jumpToPage(pageNum) {
    if(this.book_entry !== null) {
      if(this.currentBook.title == "Bible") {
        if(pageNum <= this.book_entry.chapters.length && pageNum >= 1) {
          this.pageNumber = pageNum-1;
          this.nextPage();
        }
      }
    }
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    this.scrollFunction();
  }

  scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("backToTop").style.display = "block";
      } else {
          document.getElementById("backToTop").style.display = "none";
      }
  }

  backToTop() {
      document.body.scrollTop = 0; 
      document.documentElement.scrollTop = 0; 
  }

}

