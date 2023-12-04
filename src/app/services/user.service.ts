import { Injectable } from '@angular/core';
import { wrpUser } from '../models/wrpUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: wrpUser | undefined;

  constructor() { }


  setUser(user: any): void {
    this.user = user;
  }

  getUser(): any {
    return this.user;
  }

  resetUser(): void {
    this.user = undefined
  }

}
