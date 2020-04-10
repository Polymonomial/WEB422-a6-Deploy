import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-footer-posts',
  templateUrl: './footer-posts.component.html',
  styles: []
})
export class FooterPostsComponent implements OnInit {
  posts: Array<BlogPost>
  postsSub: any;
  constructor(private data: PostService) { }

  ngOnInit(): void {
    this.postsSub = this.data.getPosts(1, null, null).subscribe(data => {this.posts = data.slice(0,3)});
  }

  ngOnDestroy(): void{
    this.postsSub.unscribe();
  }
}
