import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from "../BlogPost";
import { PostService } from '../post.service'

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styles: []
})
export class LatestPostsComponent implements OnInit {
  @Input() posts: Array<BlogPost>
  postsSub: any;
  constructor(private data: PostService) { }

  ngOnInit(): void {
    this.postsSub = this.data.getPosts(1, null, null).subscribe(data => {this.posts = data.slice(0,3)});
  }

  ngOnDestroy(): void{
    this.postsSub.unsubscribe();
  }
}
