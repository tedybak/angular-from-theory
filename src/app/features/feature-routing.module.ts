import { NgModule } from '@angular/core';
import { Router, Route, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import {BlogComponent} from "./blog/blog.component";

const routes: Route[] = [
  { path: 'search', component: SearchComponent },
  {path: 'search/:term', component: SearchComponent},
  { path: 'home', component: HomeComponent },
  {path: 'blog/:id', component: BlogComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
