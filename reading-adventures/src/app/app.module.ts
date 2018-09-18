import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookViewComponent } from './book-view/book-view.component';
import { ReadingViewComponent } from './reading-view/reading-view.component';
import { LibraryServiceService } from './library-service.service';
import { SimpleAuthGuardService } from './simple-auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BookViewComponent,
    ReadingViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LibraryServiceService,SimpleAuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
