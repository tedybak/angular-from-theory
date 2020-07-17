import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItunesService } from '../../services/itunes.service';
import { SearchItem } from '../../models/searchItem.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  data: SearchItem[] = [];

  term: string = null;
  constructor(
    private activate: ActivatedRoute,
    private itunes: ItunesService
  ) {}

  ngOnInit(): void {
    this.activate.paramMap.subscribe((params) => {
      this.term = params['search'];
    });
  }
}
