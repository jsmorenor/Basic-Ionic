import { Component, OnInit } from '@angular/core';
import { PostService } from '@modules/post/services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '@core/models/post';
import { User } from '@core/models/user';
import { OwnerService } from '@shared/services/owner.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: [ './post.component.scss' ],
})
export class PostComponent implements OnInit {
  public post$?: Observable<Post[]>;
  public userId!: string | number;
  public userInfo$!: Observable<User | undefined>;

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute, private ownerService: OwnerService) { }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.params['id'];
    this.post$ = this.postService.getPosts(this.userId);
    this.userInfo$ = this.ownerService.getOwner(this.userId);
  }
}
