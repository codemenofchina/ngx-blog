/**
 * Created by chenqiang on 2017/7/28.
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BlogsService} from './services/blogs.service';
import {Blog} from './blog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import './ckeditor.loader';
import 'ckeditor';
@Component({
  template: `
    <br>
    <div>
      <form [formGroup]="blogForm" (ngSubmit)="onSubmit()" novalidate>
        <div class="form-group">
          <label class="d-block">
            <input class="form-control" formControlName="name" [(ngModel)]="blog.time" placeholder="标题，2到32个字符" />
          </label>
        </div>
        <div formGroupName="reprinted">
          <div class="form-group">
            <label class="d-block">
              <input class="form-control" formControlName="reprintedUrl" [(ngModel)]="blog.time" placeholder="原文URL，如果是转载请粘贴，最长1024个字符" />
            </label>
          </div>
        </div>
        <div>
          <ckeditor formControlName="content" [(ngModel)]="blog.content" >
          </ckeditor>
        </div>
        <div><button class="btn btn-success" type="submit" >提交</button></div>
      </form>
      <!--<p>formValue: {{blogForm.value | json}}</p>-->
      <!--<p>formStatus: {{blogForm.status | json}}</p>-->
      <!--<p>reprintedValue: {{blogForm.get('reprinted.reprintedUrl').value}}</p>-->
      <!--<p>contentValue: {{blogForm.get('content').value}}</p>-->
    </div>
  `,
  providers: [
    BlogsService
  ]
})

export class BlogUpdateComponent implements OnInit {

  blogId: number;
  blog: Blog = new Blog();
  errorMessage: string;
  blogForm: FormGroup;
  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogsService,
    private fb: FormBuilder
  ) {
    this.createFrom();
  }

  createFrom(): void {
    this.blogForm = this.fb.group({
      name: ['', Validators.required],
      reprinted: this.fb.group({
        reprintedUrl: ''
      }),
      content: ''
    });
  }

  ngOnInit () {
    this.route.params.subscribe(res => {
      console.log('update: ' + res.id);
      this.blogId = res.id;
    });
    this.initHandle();
  }

  initHandle() {
    this.blogService.getBlogById(this.blogId).subscribe(
      result => this.blog = result.data,
      error => this.errorMessage = <any>error
    );
  }

  onSubmit(): void {
    console.log(this.blogForm.value);
    console.log(this.blog);
  }

}
