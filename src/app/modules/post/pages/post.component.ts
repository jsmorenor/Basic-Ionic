import { Component, OnInit } from '@angular/core';
import { PostService } from '@modules/post/services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: [ './post.component.scss' ],
})
export class PostComponent implements OnInit {
  public post$?: Observable<any>;

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;
    this.post$ = this.postService.getPost(id);
  }

}
