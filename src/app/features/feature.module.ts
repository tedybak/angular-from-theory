import { NavbarComponent } from './../componentes/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SearchComponent, NavbarComponent, FormComponent],
  imports: [CommonModule, FeatureRoutingModule, FormsModule, HttpClientModule],
  exports: [NavbarComponent],
})
export class FeatureModule {}
