import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artist:any;

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe( (queryParams:any)=>{
      this.artist = queryParams['search'];
    })
  }

       //{search: "snap"}
    // this.itunesService.getArtistCollection(formulario).subscribe((data) => {
    //   this.data = data;
    //   console.log(data);
    // });

}
