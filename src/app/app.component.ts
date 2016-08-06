import {Component} from "@angular/core";
import {ToursSearchComponent} from "./tours/tours-search/tours-search.component";
import {MdToolbar} from "@angular2-material/toolbar";
import {MdButton} from "@angular2-material/button";
import {MD_SIDENAV_DIRECTIVES} from "@angular2-material/sidenav";
import {MD_LIST_DIRECTIVES} from "@angular2-material/list";
import {MD_CARD_DIRECTIVES} from "@angular2-material/card";
import {MD_MENU_DIRECTIVES} from '@angular2-material/menu';
import {MdInput} from "@angular2-material/input";
import {MdCheckbox} from "@angular2-material/checkbox";
import {MdRadioButton, MdRadioGroup} from "@angular2-material/radio";
import {MdIcon, MdIconRegistry} from "@angular2-material/icon";
import {ROUTER_DIRECTIVES, ActivatedRoute, Router} from '@angular/router';
import {TourService} from "./tours/shared/tour.service";
import {Subscription} from "rxjs/Rx";
import {CurrentPageService} from "./shared/current-page.service";
import {SettingsService} from "./settings/shared/settings.service";
import {SlowMotionService} from "./settings/slow-motion.service";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    ToursSearchComponent,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdToolbar,
    MdButton,
    MdInput,
    MdCheckbox,
    MdRadioGroup,
    MdRadioButton,
    MdIcon,
    ROUTER_DIRECTIVES,
    MD_MENU_DIRECTIVES
  ],
  providers: [MdIconRegistry, TourService, CurrentPageService, SettingsService, SlowMotionService]
})
export class AppComponent {

  private routeSub:Subscription;
  routeData:any;

  constructor(public router:Router,
              public activeRoute:ActivatedRoute,
              public currentPageService:CurrentPageService) {
  }
  ngOnInit() {
    this.currentPageService.extractTitle = () => "Virtualūs turai";
  }


}

