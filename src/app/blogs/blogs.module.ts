/**
 * Created by chenqiang on 2017/8/22.
 */
import {NgModule} from '@angular/core';
import {BlogsComponent} from './blogs.component';
import {CommonModule} from '@angular/common';
import {BlogsRoutingModule} from './blogs.routes';
import {BlogListComponent} from './blog-list.component';
import {MyPaginationComponent} from '../commons/my-pagination.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ModalModule, PaginationModule} from 'ngx-bootstrap';
import {JsonpModule} from '@angular/http';
import {BlogWriteComponent} from './blog-write.component';
import {CKEditorModule} from 'ng2-ckeditor';
import {BlogUpdateComponent} from './blog-update.component';
@NgModule({
  declarations: [
    BlogsComponent,
    BlogListComponent,
    BlogWriteComponent,
    BlogUpdateComponent,
    MyPaginationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    CKEditorModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    BlogsRoutingModule
  ]
})

export class BlogsModule {}
