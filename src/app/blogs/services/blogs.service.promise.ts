/**
 * Created by chenqiang on 2017/7/26.
 */
import {Injectable} from '@angular/core';
import {Http, Jsonp, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {MyResult} from '../../commons/Result';
import {Blog} from '../blog';
@Injectable()
export class BlogsPromiseService {

  // public blogsUrl = 'mock-data/bloglist-mock.json';
  public blogsUrl = 'http://127.0.0.1:8080/MyBlog2/TestMyServlet';

  constructor (
    private http: Http,
    private jsonp: Jsonp
  ) {}

  getBlogs (page: number): Promise<MyResult> {
    // console.log('service:' + page);
    if (page === undefined) {
      page = 1;
    }
    console.log(this.blogsUrl);
    return this.http.get(this.blogsUrl + '?method=list&page=' + page)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  getBlogById (id: number): Promise<MyResult> {
    return this.http.get(this.blogsUrl + '?method=detail&id=' + id)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  modBlog (blog: Blog): Promise<MyResult> {
    return this.http.post(this.blogsUrl + '?method=mod', blog)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  deleteBlogById(id: number): Promise<MyResult> {
    return this.http.delete(this.blogsUrl + '?method=del&id=' + id)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body: any = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
}
