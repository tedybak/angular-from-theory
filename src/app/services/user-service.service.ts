import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor() {}
  isLoggedIn(): boolean {
    return true;
  }
}
