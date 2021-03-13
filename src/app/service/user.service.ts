import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { r } from '@angular/core/src/render3';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user';

@Injectable()
export class UserService {

  private usersUrl: string
  private users: Observable<User[]>

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/api/users'
   }

   public findAll(): Observable<User[]> {
     this.users = this.http.get<User[]>(this.usersUrl)
     return this.users
   }

}
