import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ],
})
export class HeaderComponent implements OnInit {
  @Input() public title?: string;
  public canSearch = false;

  constructor(private location: Location) { }

  ngOnInit() {}

  public alterSearchView(): void {
    this.canSearch = !this.canSearch;
  }

  public goBack(): void {
    this.location.back();
  }
}
