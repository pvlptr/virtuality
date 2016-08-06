import {Component, OnInit, Output} from '@angular/core';
import EventEmitter = protractor.EventEmitter;
import {CurrentPageService} from "../../shared/current-page.service";

@Component({
  moduleId: module.id,
  selector: 'expos-search',
  templateUrl: 'expos-search.component.html',
  styleUrls: ['expos-search.component.css']
})
export class ExposSearchComponent implements OnInit {

  constructor(private currentPageService: CurrentPageService) { }

  ngOnInit() {
    this.currentPageService.extractTitle = () => "Virtualios parodos";
  }

}
