import { NavbarComponent } from './../componentes/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    SearchComponent,
    NavbarComponent,
    FormComponent,
    HomeComponent,
    BlogComponent,
  ],
  imports: [CommonModule, FeatureRoutingModule, FormsModule, HttpClientModule],
  exports: [NavbarComponent],
})
export class FeatureModule {}
