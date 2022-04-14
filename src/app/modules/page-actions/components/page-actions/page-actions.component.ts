import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pages } from '@core/literals/pages';

@Component({
  selector: 'app-page-actions',
  templateUrl: './page-actions.component.html',
  styleUrls: [ './page-actions.component.scss' ],
})
export class PageActionsComponent implements OnInit {
  @Input() userId!: string | number;
  public userPages = Pages.routes;
  public currentPage!: string;

  constructor(private router: Router) { }

  ngOnInit() {
    const route = this.router.url.split('/');
    this.currentPage = route[route.length - 1];
  }

  public changePage(page: string): void {
    this.router.navigate([ '/', 'users', this.userId, page ]).then();
  }
}
