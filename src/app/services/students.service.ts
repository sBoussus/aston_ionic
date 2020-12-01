import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API: string = 'http://localhost:3000/students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  findAll(): any {
    return this.http.get(API);
  }

  findById(id: number): any {
    return this.http.get(API + '/' + id);
  }

}
