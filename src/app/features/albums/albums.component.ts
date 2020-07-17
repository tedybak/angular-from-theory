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

  objeto: Object = {
    search: null,
    entity: 'album',
  };

  constructor(private route: ActivatedRoute, private itunes: ItunesService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.objeto['search'] = params['search'];
    });

    this.itunes.getArtistCollection(this.objeto).subscribe((datos) => {
      this.data = datos;
    });
  }
}
