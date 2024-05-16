import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  standalone: true,
  imports: [],
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.css'
})
export class TestingComponent {

  title: string;
  subtitle: string;

  constructor() {
    this.title = "Welcome to GeeksForGeeks";
    this.subtitle = "this";
  }

  ngOnInit() {
    this.subtitle = "from ngOnInit";
  }
}
