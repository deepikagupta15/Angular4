import { Component, OnInit } from '@angular/core';
import {Post} from '../post';
import {PostService} from '../post.service';

@Component({
  selector: 'home-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts:any[];
  postObject:Post;
  flag:boolean;
  errorMessage:string;

  constructor(private _postService:PostService) { 
    this.flag=false;
  }

  ngOnInit() {
    // service will return the result.
    //  this._postService.getPosts().subscribe(result=>this.posts=result);
  }

  getPost(pid:number) {
    this._postService.getSpecificPost(pid).subscribe(
      result=>{
        this.postObject=result
        this.flag=true;
    },
      error=>{
        this.errorMessage=error
        this.flag=false;  
      }
    )
  }

}
