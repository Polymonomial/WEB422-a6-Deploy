import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { Input } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styles: []
})
export class PostCardComponent implements OnInit {
  @Input() Post: BlogPost;
  constructor() {
   }

  ngOnInit(): void {
  }

}
