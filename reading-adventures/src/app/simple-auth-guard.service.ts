import { Injectable } from '@angular/core';
import { CanActivate } from "@angular/router";
import { Router, Routes, RouterModule, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SimpleAuthGuardService implements CanActivate {

  constructor(private router: Router, private route: ActivatedRoute) { }

  canActivate() {
    if(localStorage.getItem("books") !== null) {
      return true;
    }
    else {
      this.router.navigate(['/books']);
      return false;
    }
  }
}