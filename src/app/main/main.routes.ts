/**
 * Created by chenqiang on 2017/8/22.
 */
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {NgModule} from '@angular/core';
const mianRoutes: Routes = [
  { path: '', component: MainComponent,
    children: [
      { path: '', loadChildren: 'app/blogs/blogs.module#BlogsModule' },
      { path: 'blogs', loadChildren: 'app/blogs/blogs.module#BlogsModule' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(mianRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class MainRoutingModule {}
