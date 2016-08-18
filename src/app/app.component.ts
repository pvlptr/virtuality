import {Component} from "@angular/core";
import {ToursSearchComponent} from "./tours/tours-search/tours-search.component";
import {CurrentPageService} from "./shared/current-page.service";


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    ToursSearchComponent,
  ]
})
export class AppComponent {

  constructor(public currentPageService:CurrentPageService) {
  }
  ngOnInit() {
    this.currentPageService.extractTitle = () => "Virtualūs turai";
  }


}

