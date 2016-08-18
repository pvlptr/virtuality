import {Component, OnInit} from "@angular/core";
import {CurrentPageService} from "../../shared/current-page.service";
import {ToursListComponent} from "./tours-list/tours-list.component";

@Component({
  moduleId: module.id,
  selector: 'tours-search',
  templateUrl: 'tours-search.component.html',
  styleUrls: ['tours-search.component.css'],
  directives: [ToursListComponent]
})
export class ToursSearchComponent implements OnInit {

  constructor(private currentPageService:CurrentPageService) {
  }

  ngOnInit() {
    this.currentPageService.extractTitle = () => "Virtualūs turai";
  }
}
