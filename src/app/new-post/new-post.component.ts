import { Component, OnInit } from '@angular/core';
import { PostService } from'../post.service';
import { Router } from '@angular/router';
import { BlogPost } from '../BlogPost';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styles: []
})
export class NewPostComponent implements OnInit {
  blogPost: BlogPost = new BlogPost();
  tags: string;
  submitSub: any
  constructor(private data:PostService, private router:Router) { }

  formSubmit(){
    this.tags.split(",").map(tag => tag.trim());
    this.blogPost.isPrivate = false;
    this.blogPost.postDate =  new Date().toLocaleDateString();
    this.blogPost.postedBy = "WEB422 Student";
    this.blogPost.views = 0;
    this.submitSub = this.data.newPost(this.blogPost).subscribe(res =>{
      this.router.navigate(['admin']);
    })
  }
  ngOnInit(): void {
  }

  ngOnDestroy(): void{
    if(this.submitSub)this.submitSub.unsubscribe();
  }
}
