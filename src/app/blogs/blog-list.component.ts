import {Component, OnInit} from '@angular/core';
import {BlogsService} from './services/blogs.service';
import {Blog} from './blog';
@Component({
  template: `
    <h1>blogs list</h1>
    <app-pagination [totalItems]="totalNum" (currentPage)="pageHandel($event)"></app-pagination>
  `,
  providers: [
    BlogsService
  ]
})

export class BlogListComponent implements OnInit {

  blogList: Blog[];
  errorMessage: string;
  totalNum: number;
  currentPage = 0;

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
