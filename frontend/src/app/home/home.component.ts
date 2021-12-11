import { Component, OnInit } from '@angular/core';
import { WebRequestService } from '../web-request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: any = [];

  constructor(private webService: WebRequestService) { }

  ngOnInit(): void {
    this.webService.getMovies().subscribe(movies => {
      console.log(movies);
      this.movies = movies["movies"];
    })
  }
}
