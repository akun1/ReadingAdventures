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

  PopUpFunction1() {
    var popup_1 = document.getElementById("myPopup_1");
    popup_1.classList.toggle("show");
  }
  
   PopUpFunction2() {
    var popup_2 = document.getElementById("myPopup_2");
    popup_2.classList.toggle("show");
  }
  PopUpFunction3() {
    var popup_3 = document.getElementById("myPopup_3");
    popup_3.classList.toggle("show");
  }
  PopUpFunction4() {
    var popup_4 = document.getElementById("myPopup_4");
    popup_4.classList.toggle("show");
  }
  PopUpFunction5() {
    var popup_5 = document.getElementById("myPopup_5");
    popup_5.classList.toggle("show");
  }
  PopUpFunction6() {
    var popup_6 = document.getElementById("myPopup_6");
    popup_6.classList.toggle("show");
  }
  PopUpFunction7() {
    var popup_7 = document.getElementById("myPopup_7");
    popup_7.classList.toggle("show");
  }
  PopUpFunction8() {
    var popup_8 = document.getElementById("myPopup_8");
    popup_8.classList.toggle("show");
  }
  PopUpFunction9() {
    var popup_9 = document.getElementById("myPopup_9");
    popup_9.classList.toggle("show");
  }
  PopUpFunction10() {
    var popup_10 = document.getElementById("myPopup_10");
    popup_10.classList.toggle("show");
  }
  PopUpFunction11() {
    var popup_11 = document.getElementById("myPopup_11");
    popup_11.classList.toggle("show");
  }
  PopUpFunction12() {
    var popup_12 = document.getElementById("myPopup_12");
    popup_12.classList.toggle("show");
  }
  PopUpFunction13() {
    var popup_13 = document.getElementById("myPopup_13");
    popup_13.classList.toggle("show");
  }
  PopUpFunction14() {
    var popup_14 = document.getElementById("myPopup_14");
    popup_14.classList.toggle("show");
  }
  PopUpFunction15() {
    var popup_15 = document.getElementById("myPopup_15");
    popup_15.classList.toggle("show");
  }
   PopUpFunction16() {
    var popup_16 = document.getElementById("myPopup_16");
    popup_16.classList.toggle("show");
  }
   PopUpFunction17() {
    var popup_17 = document.getElementById("myPopup_17");
    popup_17.classList.toggle("show");
  }
   PopUpFunction18() {
    var popup_18 = document.getElementById("myPopup_18");
    popup_18.classList.toggle("show");
  }
   PopUpFunction19() {
    var popup_19 = document.getElementById("myPopup_19");
    popup_19.classList.toggle("show");
  }
   PopUpFunction20() {
    var popup_20 = document.getElementById("myPopup_20");
    popup_20.classList.toggle("show");
  }
   PopUpFunction21() {
    var popup_21 = document.getElementById("myPopup_21");
    popup_21.classList.toggle("show");
  }
   PopUpFunction22() {
    var popup_22 = document.getElementById("myPopup_22");
    popup_22.classList.toggle("show");
  }
   PopUpFunction23() {
    var popup_23 = document.getElementById("myPopup_23");
    popup_23.classList.toggle("show");
  }
   PopUpFunction24() {
    var popup_24 = document.getElementById("myPopup_24");
    popup_24.classList.toggle("show");
  }
   PopUpFunction25() {
    var popup_25 = document.getElementById("myPopup_25");
    popup_25.classList.toggle("show");
  }
   PopUpFunction26() {
    var popup_26 = document.getElementById("myPopup_26");
    popup_26.classList.toggle("show");
  }
   PopUpFunction27() {
    var popup_27 = document.getElementById("myPopup_27");
    popup_27.classList.toggle("show");
  }
   PopUpFunction28() {
    var popup_28 = document.getElementById("myPopup_28");
    popup_28.classList.toggle("show");
  }
   PopUpFunction29() {
    var popup_29 = document.getElementById("myPopup_29");
    popup_29.classList.toggle("show");
  }
  PopUpFunction30() {
    var popup_30 = document.getElementById("myPopup_30");
    popup_30.classList.toggle("show");
  }
  PopUpFunction31() {
    var popup_31 = document.getElementById("myPopup_31");
    popup_31.classList.toggle("show");
  }
  PopUpFunction32() {
    var popup_32 = document.getElementById("myPopup_32");
    popup_32.classList.toggle("show");
  }
  PopUpFunction33() {
    var popup_33 = document.getElementById("myPopup_33");
    popup_33.classList.toggle("show");
  }
  PopUpFunction34() {
    var popup_34 = document.getElementById("myPopup_34");
    popup_34.classList.toggle("show");
  }
  PopUpFunction35() {
    var popup_35 = document.getElementById("myPopup_35");
    popup_35.classList.toggle("show");
  }
  PopUpFunction36() {
    var popup_36 = document.getElementById("myPopup_36");
    popup_36.classList.toggle("show");
  }
  PopUpFunction37() {
    var popup_37 = document.getElementById("myPopup_37");
    popup_37.classList.toggle("show");
  }
  PopUpFunction38() {
    var popup_38 = document.getElementById("myPopup_38");
    popup_38.classList.toggle("show");
  }
  PopUpFunction39() {
    var popup_39 = document.getElementById("myPopup_39");
    popup_39.classList.toggle("show");
  }
  PopUpFunction40() {
    var popup_40 = document.getElementById("myPopup_40");
    popup_40.classList.toggle("show");
  }
  PopUpFunction41() {
    var popup_41 = document.getElementById("myPopup_41");
    popup_41.classList.toggle("show");
  }
  PopUpFunction42() {
    var popup_42 = document.getElementById("myPopup_42");
    popup_42.classList.toggle("show");
  }
  PopUpFunction43() {
    var popup_43 = document.getElementById("myPopup_43");
    popup_43.classList.toggle("show");
  }
  PopUpFunction44() {
    var popup_44 = document.getElementById("myPopup_44");
    popup_44.classList.toggle("show");
  }
  PopUpFunction45() {
    var popup_45 = document.getElementById("myPopup_45");
    popup_45.classList.toggle("show");
  }

}

