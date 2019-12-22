import { Component } from '@angular/core';
import { PageToggleService } from './share/page-toggle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
  ]
})
export class AppComponent {
  title = 'front-end';
  constructor(
    public pageToggleService: PageToggleService

  ) {

  }
}
