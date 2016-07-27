import { Component } from '@angular/core';
import { ToursSearchComponent } from './tours/tours-search/tours-search.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ToursSearchComponent]
})
export class AppComponent {
  title = 'app works!';
}
