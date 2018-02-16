import { Injectable } from '@angular/core';
import {Response,Http} from '@angular/http' ;
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Post} from './post';

@Injectable()
export class PostService {
  posts:Post[];

// DI of HTTP in Post service
  constructor(private _http:Http) { }

  getPosts():Observable<any> {
    // response = HTTP RESPONSE(Observable) . MAP operator is used to convert data into json format
    return this._http.get("http://jsonplaceholder.typicode.com/posts")// web - service hosted by java
    .map(response=>response.json());
  }

  getSpecificPost(pid:number):Observable<any> {
    return this._http.get("http://jsonplaceholder.typicode.com/posts/"+pid)
    .map(response=>response.json())
    .catch(error=>error)

  }
}
