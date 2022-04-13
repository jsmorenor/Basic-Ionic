import { Component, OnInit } from '@angular/core';
import { PostService } from '@modules/post/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: [ './post.component.scss' ],
})
export class PostComponent implements OnInit {
  public post$?: Observable<any>;
  public userId!: string | number;

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.params['id'];
    this.post$ = this.postService.getPost(this.userId);
  }

  public changePage(page: string): void {
    this.router.navigate([ '/', 'users', this.userId, page ]).then();
  }

}
