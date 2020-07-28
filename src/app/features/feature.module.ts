import { NavbarComponent } from './../componentes/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TracksComponent } from './tracks/tracks.component';
import { AlbumsComponent } from './albums/albums.component';
import { ArtistComponent } from './artist/artist.component';

import { AlwaysAuthGuardGuard } from './../guards/always-auth-guard.guard';

@NgModule({
  declarations: [
    SearchComponent,
    NavbarComponent,
    FormComponent,
    HomeComponent,
    TracksComponent,
    AlbumsComponent,
    ArtistComponent,
  ],

  imports: [CommonModule, FeatureRoutingModule, FormsModule, HttpClientModule],
  exports: [NavbarComponent],
  providers: [AlwaysAuthGuardGuard],
})
export class FeatureModule {}
