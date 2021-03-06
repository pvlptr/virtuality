import {Component, OnInit} from '@angular/core';
import {Tour, TourService} from '../../shared/index';

@Component({
  moduleId: module.id,
  selector: 'tours-list',
  templateUrl: 'tours-list.component.html',
  styleUrls: ['tours-list.component.css']
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
