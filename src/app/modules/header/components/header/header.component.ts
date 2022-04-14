import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { OwnerService } from '@shared/services/owner.service';
import { Observable } from 'rxjs';
import { User } from '@core/models/user';
import { Post } from '@core/models/post';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ],
})
export class HeaderComponent implements OnInit {
  @Input() public userId?: string | number;
  @Input() public activateBack = false;
  @Input() public postId$?: Observable<Post | undefined>;

  public username$!: Observable<User | undefined>;

  public canSearch = false;

  constructor(private location: Location, private ownerService: OwnerService) { }

  ngOnInit() {
    if (this.postId$) {
      this.postId$.subscribe(data => {
        console.log(data);
        this.userId = data?.userId;
        this.username$ = this.ownerService.getOwner(this.userId as string | number);
      });
    } else {
      this.username$ = this.ownerService.getOwner(this.userId as string | number);
    }
  }

  public alterSearchView(): void {
    this.canSearch = !this.canSearch;
  }

  public goBack(): void {
    this.location.back();
  }

  public getOwner() {
    console.log(this.userId, 'getOwner');
  }
}
