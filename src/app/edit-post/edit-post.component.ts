import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router, ActivatedRoute } from '@angular/router'
import { BlogPost } from '../BlogPost';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styles: []
})
export class EditPostComponent implements OnInit {
  blogPost: BlogPost;
  tags: string;
  blogPostSub: any
  id: string
  idSub: any
  submitSub:any
  deleteSub:any
  constructor(private data: PostService, private router: Router, private activatedRoute: ActivatedRoute) { }

  formSubmit(){
    this.tags.split(",").map(tag => tag.trim()); 
    this.submitSub = this.data.updatePostById(this.blogPost._id, this.blogPost).subscribe(res =>{
      this.router.navigate(['admin']);
    })
  }

  deletePost(){
    this.deleteSub = this.data.deletePostById(this.blogPost._id).subscribe(res =>{
      this.router.navigate(['admin']);
    })
  }

  ngOnInit(): void {
    this.idSub = this.activatedRoute.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
   });
    this.blogPostSub = this.data.getPostbyId(this.id).subscribe(postData => {
      this.blogPost = postData;
      this.tags = postData.tags.toString();
    })
    
    console.log(this.tags);
  }

  ngOnDestroy(): void{
    if(this.idSub)this.idSub.unsubscribe();
    if(this.blogPostSub)this.blogPostSub.unsubscribe();
    if(this.submitSub)this.submitSub.unsubscribe();
    if(this.deleteSub)this.deleteSub.unsubscribe();
  }

}
