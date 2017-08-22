/**
 * Created by chenqiang on 2017/8/22.
 */
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './not-found.component';
import {NgModule} from '@angular/core';
const appRoutes: Routes = [
  { path: 'main', loadChildren: 'app/main/main.module#MainModule' },
  { path: 'user', loadChildren: 'app/main/main.module#MainModule' },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
