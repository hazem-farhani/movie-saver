import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {
  readonly ROOT_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  upload(fd: FormData) {
    return this.http.post(`${this.ROOT_URL}/upload`, fd, {
      reportProgress: true,
      observe: 'events'
    });
  }

  getMovies() {
    return this.http.get(`${this.ROOT_URL}/movies`);
  }
}

