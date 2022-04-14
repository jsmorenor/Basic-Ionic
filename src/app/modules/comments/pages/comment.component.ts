import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from '@modules/comments/services/comment.service';
import { Observable } from 'rxjs';
import { Comment } from '@core/models/comment';
import { OwnerService } from '@shared/services/owner.service';
import { Post } from '@core/models/post';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: [ './comment.component.scss' ],
})
export class CommentComponent implements OnInit {
  public currentPostId!: string | number;
  public comments$!: Observable<Comment[]>;
  public userId$?: Observable<Post | undefined>;

  constructor(private router: ActivatedRoute, private commentService: CommentService, private ownerService: OwnerService) { }

  ngOnInit() {
    this.currentPostId = this.router.snapshot.params['id'];
    this.comments$ = this.commentService.getPostComments(this.currentPostId);
    this.getUserId();
  }

  getUserId() {
    this.userId$ = this.ownerService.getPostOwner(this.currentPostId);
  }

}
