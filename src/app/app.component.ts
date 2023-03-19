import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { APP_ROUTES } from 'src/routes/routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, RouterLinkWithHref, NgForOf]
})
export class AppComponent {
  title = 'partial-app';
  routes: string[];

  constructor() {
    this.routes = APP_ROUTES.map(r => r.path);
  }
}
