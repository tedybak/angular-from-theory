import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchItem } from '../models/searchItem.model';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItunesService {
  searchItem: SearchItem[] = [];
  apiRoot: string = 'https://itunes.apple.com/search';

  constructor(private http: HttpClient) {}

  getArtistCollection(search: string) {
    let artist = search;
    let apiURL = `${this.apiRoot}?term=${artist}&media=music&limit=20`;
    console.log(apiURL);

    return this.http.get<SearchItem>(`${apiURL}`).pipe(
      map((resp) => {
        return resp['results'].map((item) => {
          return new SearchItem(
            item.artisName,
            item.artistViewUrl,
            item.artworkUrl30,
            item.collectionCensoredName,
            item.country,
            item.kind
          );
        });
      })
    );
  }
} //clase
