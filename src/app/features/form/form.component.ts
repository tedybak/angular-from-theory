import { Router } from '@angular/router';
import { ItunesService } from './../../services/itunes.service';
import {
  Component, Input,
  OnInit,
  ɵCompiler_compileModuleSync__POST_R3__,
} from '@angular/core';
import { Form } from '@angular/forms';
import { SearchItem } from 'src/app/models/searchItem.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(private router:Router) {}

 
  
 

  ngOnInit(): void {}

  onSubmit(formulario) {
 
    const artist = formulario.search;
    this.router.navigate(['artist'], {queryParams : { 'search': artist }} );

 
  }
}
