import { Injectable } from '@angular/core';
import { BlogPost } from './BlogPost';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
let perPage = 6;
let maxPage = Number.MAX_SAFE_INTEGER-1;
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(page, tag, category): Observable<BlogPost[]>{
    if(tag == null && category == null){
      return this.http.get<BlogPost[]>(`https://shielded-brook-26230.herokuapp.com/api/posts?page=${page}&perPage=${perPage}`)
    }
    else if(tag != null && category == null){
      return this.http.get<BlogPost[]>(`https://shielded-brook-26230.herokuapp.com/api/posts?page=${page}&perPage=${perPage}&tag=${tag}`)
    }
    else if(tag == null && category !=null){
      return this.http.get<BlogPost[]>(`https://shielded-brook-26230.herokuapp.com/api/posts?page=${page}&perPage=${perPage}&category=${category}`)
    }
    else if(tag != null && category !=null){
      return this.http.get<BlogPost[]>(`https://shielded-brook-26230.herokuapp.com/api/posts?page=${page}&perPage=${perPage}&tag=${tag}&category=${category}`)
    }
    else{
      return this.http.get<BlogPost[]>(`https://shielded-brook-26230.herokuapp.com/api/posts?page=${page}&perPage=${perPage}`)
    }
  }

  getPostbyId(id): Observable<BlogPost>{
    return this.http.get<BlogPost>(`https://shielded-brook-26230.herokuapp.com/api/posts/${id}`)
  }

  getCategories(): Observable<any>{
    return this.http.get<any>(`https://shielded-brook-26230.herokuapp.com/api/categories`)
  }

  getTags(): Observable<string[]>{
    return this.http.get<string[]>(`https://shielded-brook-26230.herokuapp.com/api/tags`)
  }

  getAllPost(): Observable<BlogPost[]>{
    return this.http.get<BlogPost[]>(`https://shielded-brook-26230.herokuapp.com/api/posts?page=1&perPage=${maxPage}`)
  }

  newPost(data:BlogPost):Observable<any>{
    return this.http.post<any>(`https://shielded-brook-26230.herokuapp.com/api/posts`, data);
  }

  updatePostById(id:string, data:BlogPost):Observable<any>{
    return this.http.put<any>(`https://shielded-brook-26230.herokuapp.com/api/posts/${id}`, data);
  }

  deletePostById(id:string):Observable<any>{
    return this.http.delete<any>(`https://shielded-brook-26230.herokuapp.com/api/posts/${id}`);
  }
}
