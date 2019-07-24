import { Component, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  showSidenav = false;
  @ViewChild('sidenav') sidenav:any;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  toggleSidenav()
  {
    this.sidenav.toggle();
    this.showSidenav = !this.showSidenav;
  }

  routeDashboardPage(){
    this.router.navigate(['home/dashboard']);
  }

  routeExpenseSetting(){
    this.router.navigate(['home/expense-setting']);
  }

}
