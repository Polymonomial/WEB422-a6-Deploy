import { Component, OnInit, Output } from '@angular/core';
import { PostService } from '../post.service'
import { Router } from '@angular/router'
import { BlogPost } from '../BlogPost'
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styles: []
})
export class PostsTableComponent implements OnInit {
  blogPosts: Array<BlogPost>;
  allBlogSub: any;
  constructor(private data: PostService, private route: Router) { }

  rowClicked(e, id){
    this.route.navigate(['/admin/post', id]);
  }
  ngOnInit(): void {
    this.allBlogSub = this.data.getAllPost().subscribe(res =>{
      if(res.length > 0){
        this.blogPosts = res;
        console.log(this.blogPosts[0]);
      }
      
    });
  }
  ngOnDestroy():void{
    this.allBlogSub.unsubscribe();
  }

}
