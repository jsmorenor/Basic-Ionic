import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ],
})
export class HeaderComponent implements OnInit {
  @Input() public title?: string;
  public canSearch = false;
  public searcher!: FormGroup;
  public pages = [ { address: 'albums', name: 'Álbumes' }, { address: 'post', name: 'Publicaciones' } ];

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
    this.searcher = new FormGroup(
      {
        id: new FormControl(''),
        page: new FormControl(this.pages[0].address),
      },
    );
  }

  public alterSearchView(): void {
    this.canSearch = !this.canSearch;
  }

  public getUserAlbums(): void {
    const { id, page } = this.searcher.value;
    if (id && !isNaN(Number(id))) {
      this.canSearch = false;
      setTimeout(() => this.router.navigate([ '/', 'users', id, page ]), 0);
    }
  }

  public goBack(): void {
    this.location.back();
  }
}
