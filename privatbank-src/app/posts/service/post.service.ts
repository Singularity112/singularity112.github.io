import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  protocol: string = 'https://';
  base: string = 'jsonplaceholder.typicode.com';
  postsUrl: string = '/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.protocol + this.base + this.postsUrl);
  }
}
