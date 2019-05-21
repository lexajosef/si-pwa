import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  update: boolean = false;

  constructor(updates: SwUpdate, private dataService: DataService) {
    updates.available.subscribe(event => {
      this.update = true;
    });
  }

  ngOnInit(): void { }

}
