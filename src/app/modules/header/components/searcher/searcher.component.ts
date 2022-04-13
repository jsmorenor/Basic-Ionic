import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: [ './searcher.component.scss' ],
})
export class SearcherComponent implements OnInit {
  @Input() canSearch = false;
  public searcher!: FormGroup;
  public pages = [ { address: 'albums', name: 'Álbumes' }, { address: 'post', name: 'Publicaciones' } ];

  constructor(private router: Router) { }

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
      setTimeout(() => this.router.navigate([ '/', 'users', id, page ]), 100);
    }
  }
}
