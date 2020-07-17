import { NgModule } from '@angular/core';
import { Router, Route, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
 
import { ArtistComponent } from './artist/artist.component';
import { TracksComponent } from './tracks/tracks.component';
import { AlbumsComponent } from './albums/albums.component';

const routes: Route[] = [
  { path: 'search', component: SearchComponent },
  { path : 'artist', component: ArtistComponent, children : [
    {path: 'tracks', component: TracksComponent},
    {path: 'albums', component: AlbumsComponent}
  ]},
 
  { path: 'home', component: HomeComponent },
   {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
