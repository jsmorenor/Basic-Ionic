import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-title',
  templateUrl: './comment-title.component.html',
  styleUrls: [ './comment-title.component.scss' ],
})
export class CommentTitleComponent implements OnInit {
  @Input() title!: string;
  @Input() description?: string;

  constructor() { }

  ngOnInit() {}

}
