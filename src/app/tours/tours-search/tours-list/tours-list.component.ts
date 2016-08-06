import {Component, OnInit} from '@angular/core';
import {Tour, TourService} from '../../shared/index';
import {ToursListItemComponent} from './tours-list-item.component';
import {MdButton} from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MD_PROGRESS_CIRCLE_DIRECTIVES} from '@angular2-material/progress-circle';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'tours-list',
  templateUrl: 'tours-list.component.html',
  styleUrls: ['tours-list.component.css'],
  directives: [
    MdButton,
    MdIcon,
    ToursListItemComponent,
    MD_PROGRESS_CIRCLE_DIRECTIVES,
    ROUTER_DIRECTIVES
  ]

})
export class ToursListComponent implements OnInit {
  selectedTour:Tour;
  tours:Tour[];
  loaded:boolean;

  constructor(private tourService:TourService) {
  }

  onSelect(tour:Tour) {
    this.selectedTour = tour;
  }

  getTours() {
    this.tours = [];
    this.loaded = false;
    this.tourService.getTours().then(tours => {
      this.tours = tours;
      this.loaded = true;
    });
  }

  ngOnInit() {
    this.getTours();
  }
}
