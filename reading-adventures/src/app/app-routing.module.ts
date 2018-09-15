import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { BookViewComponent } from './book-view/book-view.component';

const routes: Routes = [
  { path: '', component: BookViewComponent },
  { path: '**', component: BookViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
