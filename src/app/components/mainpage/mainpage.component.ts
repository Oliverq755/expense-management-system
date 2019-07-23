import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  opened: boolean;
  showSidenav = false;
  @ViewChild('sidenav') sidenav:any;

  constructor() { }

  ngOnInit() {
  }

  toggleSidenav()
  {
    this.sidenav.toggle();
    this.showSidenav = !this.showSidenav;
  }

}
