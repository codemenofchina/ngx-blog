import {Component, OnInit} from '@angular/core';
import {BlogsService} from './services/blogs.service';
import {Blog} from './blog';
@Component({
  template: `
    <div class='container-fluid'>
      <form class='form-horizontal'>
        <div class='row'>
          <div class='col-sm-10'>
            <div class='input-group'>
              <input class='form-control' type='text' placeholder='搜索' id='searchText' name='searchText'/>
              <span class='input-group-btn'>
                <button class='btn btn-primary' type='button'><i class='fa fa-search' aria-hidden='true'></i>搜索</button>
              </span>
            </div>
          </div>
          <div class='col-sm-2'>
            <div class='input-group'>
              <button class='btn btn-success' type='button' routerLink="write">发布文章</button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div>
      <div class="container-fluid">
        <div *ngFor="let blog of blogList" class="row">
          <div class="col-md-1">blogId:{{blog.blogId}}</div>
          <div class="col-md-6"><a routerLink="/blogs/detail/{{blog.blogId}}">title:{{blog.title}}</a></div>
          <div class="col-md-3">time:{{blog.time}}</div>
          <div class="col-md-2">
            <button class="btn btn-outline-success" type="button" routerLink="update/{{blog.blogId}}" >修改</button>
          </div>
          <hr/>
        </div>
      </div>
    </div>
    <app-pagination [totalItems]="totalNum" (page)="pageHandel($event)"></app-pagination>
  `,
  providers: [
    BlogsService
  ]
})

export class BlogListComponent implements OnInit {

  blogList: Blog[];
  errorMessage: string;
  totalNum: number;
  currentPage = 1;

  constructor(
    private blogService: BlogsService
  ) {
  }

  initHandle() {
    this.blogService.getBlogs(this.currentPage).subscribe(
      result => {
        this.totalNum = result.total;
        this.blogList = result.data;
      },
      error => this.errorMessage = <any>error
    );
  }

  ngOnInit() {
    this.initHandle();
  }

  pageHandel(event) {
    this.currentPage = event;
    this.initHandle();
  }
}
