import { Component, OnInit} from '@angular/core';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(private postService: PostService) { }
    
    posts: any;
    postsInCurrentPage: any;
    currentPage = 1;
    postsInPage = 10;
    firstPage = 1;
    lastPage: number;
    pages: number;
    lastClicked: number;


    ngOnInit() {
      this.initPosts();
    }

    initPosts() {
      let subscribe = this.postService.getPosts().subscribe(
        posts => { 
          this.posts = posts;
          this.showPostsInPage(1);
          this.calculatePages();
          subscribe.unsubscribe();
        }
      )
    }

    showPostsInPage(page) {
      this.postsInCurrentPage = this.posts.filter(post => post.id > this.postsInPage * (page -1) && post.id <= this.postsInPage * page );
    }

    calculatePages() {
      this.pages = Math.ceil(this.posts.length / this.postsInPage);
    }

    onClicked(id) {
      this.lastClicked = id;
    }
}
