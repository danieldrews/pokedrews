import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private router: Router) { }

  goTo(routePage, param?: any) {
    this.router.navigate([routePage, param])
  } 
}
