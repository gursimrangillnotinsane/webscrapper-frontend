import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { TestingComponent } from "./testing/testing.component";
import { ViewJobsComponent } from "./view-jobs/view-jobs.component";
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, TestingComponent, ViewJobsComponent]
})
export class AppComponent {
  title = 'angular-web-scrapping';
}
