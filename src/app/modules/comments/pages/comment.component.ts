import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from '@modules/comments/services/comment.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: [ './comment.component.scss' ],
})
export class CommentComponent implements OnInit {
  public currentPostId!: string | number;
  public comments$!: Observable<any>;

  constructor(private router: ActivatedRoute, private commentService: CommentService) { }

  ngOnInit() {
    this.currentPostId = this.router.snapshot.params['id'];
    this.comments$ = this.commentService.getPostComments(this.currentPostId);
  }

}
