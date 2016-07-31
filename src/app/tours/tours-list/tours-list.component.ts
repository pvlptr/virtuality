import { Component, OnInit } from '@angular/core';
import { Tour, TourService } from '../shared/index';
import {MdButton} from '@angular2-material/button';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';


@Component({
  moduleId: module.id,
  selector: 'tours-list',
  templateUrl: 'tours-list.component.html',
  styleUrls: ['tours-list.component.css'],
  providers: [TourService, MdIconRegistry],
  directives: [
    MD_LIST_DIRECTIVES,
    MdButton,
    MdIcon
  ]

})
export class ToursListComponent implements OnInit {
    selectedTour: Tour;
    tours: Tour[];
    constructor(private tourService: TourService) { }
    onSelect(tour: Tour) { this.selectedTour = tour; }
    getTours() {
        this.tours = [];
        this.tourService.getTours().then(tours => this.tours = tours);
    }
    ngOnInit() {
        this.getTours();
    }
}