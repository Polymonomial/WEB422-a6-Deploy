import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styles: []
})
export class PagingComponent implements OnInit {
  @Input() page: number;
  @Output() newPage = new EventEmitter();
  
  constructor() { }
  nextPage(){
    
    this.newPage.emit(this.page+1);
    
  }
  prevPage(){
    if(this.page > 1){
      this.newPage.emit(this.page-1);
    }
  }
  ngOnInit(): void {
  }

}
