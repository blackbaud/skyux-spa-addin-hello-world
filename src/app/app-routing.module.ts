import {
  NgModule
} from '@angular/core';

import {
  RouterModule,
  Routes
} from '@angular/router';

import {
  MyButtonRouteIndexComponent
} from './my-button/index.component';

import {
  MyTileRouteIndexComponent
} from './my-tile/index.component';

import {
  RootRouteIndexComponent
} from './index.component';

import {
  NotFoundComponent
} from './not-found.component';

const routes: Routes = [
  { path: 'addin-hello-world', children: [
    { path: '', component: RootRouteIndexComponent },
    { path: 'my-button', component: MyButtonRouteIndexComponent },
    { path: 'my-tile', component: MyTileRouteIndexComponent }
  ] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
