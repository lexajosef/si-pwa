import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  joke: any;
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.giveMeJoke().subscribe(jokeObj => {
      console.log(jokeObj);
      this.joke = jokeObj;
    });
  }

}
