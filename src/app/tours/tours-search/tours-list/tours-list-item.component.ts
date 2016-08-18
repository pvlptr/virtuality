import {Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer} from "@angular/core";
import {Tour} from "../../shared/index";
import {TourService} from "../../shared/tour.service";


@Component({
  moduleId: module.id,
  selector: 'tours-list-item',
  templateUrl: 'tours-list-item.component.html',
  styleUrls: ['tours-list-item.component.css']
})
export class ToursListItemComponent {

  @Input()
  tour: Tour;

  constructor(private service: TourService) {
  }


  onDelete(tour: Tour) {
    this.service.delete(tour);
  }
}
