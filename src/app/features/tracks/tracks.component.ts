import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItunesService } from 'src/app/services/itunes.service';
import { SearchItem } from 'src/app/models/searchItem.model';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css'],
})
export class TracksComponent implements OnInit {
  data: SearchItem[] = [];
  artist: any;

  objeto: string;

  constructor(private route: ActivatedRoute, private itunes: ItunesService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.objeto = params['search'];
    });

    this.objeto = this.objeto + '&entity=song';

    this.itunes.getArtistCollection(this.objeto).subscribe((datos) => {
      this.data = datos;
    });
  }
}
