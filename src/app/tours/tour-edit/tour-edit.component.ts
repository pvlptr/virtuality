import {Component, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {TourService} from "../shared/tour.service";
import {Tour} from "../shared/tour.model";
import {Subscription} from "rxjs/Rx";
import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdRadioButton, MdRadioGroup} from '@angular2-material/radio';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MdTextarea} from "../../shared/component/textarea/textarea";
import {Pipe, PipeTransform} from '@angular/core';
import {CurrentPageService} from "../../shared/current-page.service";

@Component({
  moduleId: module.id,
  selector: 'tour-preview',
  templateUrl: 'tour-edit.component.html',
  styleUrls: ['tour-edit.component.css'],
  directives: [
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdToolbar,
    MdInput,
    MdCheckbox,
    MdRadioGroup,
    MdRadioButton,
    MdIcon,
    MdTextarea
  ]
})
export class TourEditComponent implements OnInit, OnDestroy {

  private sub:Subscription;
  private tour:Tour;

  constructor(public route:ActivatedRoute,
              private router: Router,
              private service:TourService,
              private currentPageService:CurrentPageService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let idString = params['id'];
      if (idString != null) {
        this.currentPageService.extractTitle = () => "Virtualaus turo redagavimas";
        let id = +params['id'];
        this.service.getTour(id).then(tour => {
            this.tour = tour;
            this.currentPageService.extractTitle = () => this.tour.name;
          }
        );
      }
      else {
        this.currentPageService.extractTitle = () => "Naujas virtualus turas";
        this.tour = new Tour();
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSave() {
    this.service.save(this.tour);
    this.router.navigate(["/tours"]);
  }

}
