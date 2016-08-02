import { Component, OnInit } from '@angular/core';
import { Tour } from '../shared';
import { ToursListComponent} from './tours-list/index';
import { ToursFacetsComponent } from './tours-facets/index';

@Component({
  moduleId: module.id,
  selector: 'tours-search',
  templateUrl: 'tours-search.component.html',
  styleUrls: ['tours-search.component.css'],
  directives: [ToursListComponent, ToursFacetsComponent]  
})
export class ToursSearchComponent {
}