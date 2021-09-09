import { Component } from '@angular/core';
import { FrontController } from './Controller/FrontController';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OliviaTechnicalPractice';
  // Use front controller
  controller = new FrontController();
  constructor() {
    this.controller.dispatchRequest('HOME');
    this.controller.dispatchRequest('PAGE_01');
  }
}
