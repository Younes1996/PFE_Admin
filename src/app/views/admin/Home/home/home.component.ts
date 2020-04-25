import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  values: string[] = ['Tag 1', 'Tag 2', 'Tag 4'];

  specialPage: boolean;
  public isTrue:boolean=true;
  private specialPages: any[] = [
    '/pages/login',
    '/pages/register',
    '/pages/lock',
    '/pages/pricing',
    '/pages/single-post',
    '/pages/post-listing'
  ];

  private currentUrl = '';

  constructor(
      private router: Router,
      private location: Location
  ) {

    this.router.events.subscribe((route:any) => {
      this.currentUrl = route.url;

      this.specialPage = this.specialPages.indexOf(this.currentUrl) !== -1;
    });

  }
  goBack(): void {
    this.location.back();
  }
  ngOnInit(): void {
  }

    logIn() {
    this.isTrue=false
    }
}
