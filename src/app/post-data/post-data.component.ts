import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service'
import { ActivatedRoute} from '@angular/router'
import { Comment } from '../Comment';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styles: []
})
export class PostDataComponent implements OnInit {
  post: BlogPost;
  querySub : any;
  postSub: any;
  commentName: string;
  commentText: string;
  newComment: Comment = new Comment;
  commentSub: any;
  constructor(private data: PostService, private route: ActivatedRoute) { }

  submitComment(){
    this.newComment.author = this.commentName;
    this.newComment.comment = this.commentText;
    this.newComment.date =  new Date().toLocaleDateString()
    this.post.comments.push(this.newComment);
    this.commentSub = this.data.updatePostById(this.post._id,this.post).subscribe(res =>{
      this.commentName = "";
      this.commentText = "";
    })
  }
  ngOnInit(): void {
    this.querySub = this.route.params.subscribe(params =>{
      //TODO: Get post by Id params['id'] and store the result in this.post
      this.postSub = this.data.getPostbyId(params['id']).subscribe(data => {
        this.post = data;
        this.post.views++;
        this.data.updatePostById(this.post._id, this.post).subscribe();
      });
    })
  }

  ngOnDestroy(): void{
    if(this.querySub) this.querySub.unsubscribe();this.postSub.unsubscribe();
    if(this.commentSub) this.commentSub.unsubscribe();
  }

}
