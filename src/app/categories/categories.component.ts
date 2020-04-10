import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styles: []
})
export class CategoriesComponent implements OnInit {
  categories: Array<any> = [];
  catSub: any;
  constructor(private data : PostService) { }

  ngOnInit(): void {
    this.catSub = this.data.getCategories().subscribe(data => {this.categories = data});
  }

  ngOnDestroy(): void{
    this.catSub.unsubscribe();
  }

}
