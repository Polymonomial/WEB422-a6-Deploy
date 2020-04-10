import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service'

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styles: []
})
export class TagsComponent implements OnInit {
  tags: Array<string> =[];
  tagSub: any;
  constructor(private data: PostService) { }

  ngOnInit(): void {
    this.tagSub = this.data.getTags().subscribe(data => {this.tags = data});
  }

  ngOnDestroy(): void{
    this.tagSub.unsubscribe();
  }
}
