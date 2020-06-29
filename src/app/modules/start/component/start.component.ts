import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  cover: string;

  constructor() {
    this.cover = "assets/cover.jpg";
  }

  ngOnInit(): void {
  }

}
