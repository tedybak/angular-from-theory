import { Component, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/models/searchItem.model';
import { ActivatedRoute } from '@angular/router';
import { ItunesService } from 'src/app/services/itunes.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  data: SearchItem[] = [];
  artist: any;
  objeto: string = null;

  montado: string;

  constructor(private route: ActivatedRoute, private itunes: ItunesService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.objeto = params['search'];
    });

    this.montado = this.objeto + '&entity=album';

    this.itunes.getArtistCollection(this.montado).subscribe((datos) => {
      this.data = datos;
    });
  }
}
