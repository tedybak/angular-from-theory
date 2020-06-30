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
  constructor(private itunesService: ItunesService) {}

  @Input() data: SearchItem[] = [];

  ngOnInit(): void {}

  onSubmit(formulario) {
    this.itunesService.getArtistCollection(formulario).subscribe((data) => {
      this.data = data;
      console.log(formulario);
    });
  }
}
