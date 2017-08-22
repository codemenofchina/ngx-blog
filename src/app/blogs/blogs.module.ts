/**
 * Created by chenqiang on 2017/8/22.
 */
import {NgModule} from '@angular/core';
import {BlogsComponent} from './blogs.component';
import {CommonModule} from '@angular/common';
import {BlogsRoutingModule} from './blogs.routes';
import {BlogListComponent} from './blog-list.component';
import {MyPaginationComponent} from '../commons/my-pagination.component';
import {FormsModule} from '@angular/forms';
import {PaginationModule} from 'ngx-bootstrap';
@NgModule({
  declarations: [
    BlogsComponent,
    BlogListComponent,
    MyPaginationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PaginationModule.forRoot(),
    BlogsRoutingModule
  ]
})

export class BlogsModule {}
