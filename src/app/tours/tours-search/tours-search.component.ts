import {Component, OnInit} from "@angular/core";
import {ToursListComponent} from "./tours-list/index";
import {ToursFacetsComponent} from "./tours-facets/index";
import {CurrentPageService} from "../../shared/current-page.service";

@Component({
  moduleId: module.id,
  selector: 'tours-search',
  templateUrl: 'tours-search.component.html',
  styleUrls: ['tours-search.component.css'],
  directives: [ToursListComponent, ToursFacetsComponent]
})
export class ToursSearchComponent implements OnInit {

  constructor(private currentPageService:CurrentPageService) {

  }

  ngOnInit() {
    this.currentPageService.extractTitle = () => "Virtualūs turai";
  }
}
