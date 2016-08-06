import { Component, OnInit } from '@angular/core';
import {CurrentPageService} from "../../shared/current-page.service";

@Component({
  moduleId: module.id,
  selector: 'journeys-search',
  templateUrl: 'journeys-search.component.html',
  styleUrls: ['journeys-search.component.css']
})
export class JourneysSearchComponent implements OnInit {


  constructor(private currentPageService: CurrentPageService) { }

  ngOnInit() {
    this.currentPageService.extractTitle = () => "Interaktyvus maršrutai";
  }

}
