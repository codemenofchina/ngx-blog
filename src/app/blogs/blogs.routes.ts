/**
 * Created by chenqiang on 2017/8/22.
 */
import {RouterModule, Routes} from '@angular/router';
import {BlogsComponent } from './blogs.component';
import {BlogListComponent } from './blog-list.component';
import {BlogWriteComponent } from './blog-write.component';
import {BlogUpdateComponent } from './blog-update.component';
import {NgModule} from '@angular/core';
const blogsRoutes: Routes = [
  {
    path: '',
    component: BlogsComponent,
    children: [
      {
        path: '',
        component: BlogListComponent
      },
      {
        path: 'write',
        component: BlogWriteComponent
      },
      {
        path: 'update/:id',
        component: BlogUpdateComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(blogsRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class BlogsRoutingModule {}
