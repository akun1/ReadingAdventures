import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { BookViewComponent } from './book-view/book-view.component';
import { ReadingViewComponent } from './reading-view/reading-view.component';
import { SimpleAuthGuardService } from './simple-auth-guard.service';

const routes: Routes = [
  { path: 'books', component: BookViewComponent },
  { path: 'read/:id', canActivate: [SimpleAuthGuardService], component: ReadingViewComponent },
  { path: '**', redirectTo: 'books' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
