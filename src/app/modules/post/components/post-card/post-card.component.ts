import { Component, Input, OnInit } from '@angular/core';
import { Post } from '@core/models/post';
import { PostService } from '@modules/post/services/post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: [ './post-card.component.scss' ],
})
export class PostCardComponent implements OnInit {
  @Input() postId!: string | number;
  public post$!: Observable<Post | undefined>;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.post$ = this.postService.getPost(this.postId);
  }

}
