import {Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef, Renderer} from "@angular/core";
import {ActivatedRoute, Router, ROUTER_DIRECTIVES} from "@angular/router";
import {TourService} from "../shared/tour.service";
import {Tour} from "../shared/tour.model";
import {Subscription} from "rxjs/Rx";
import {CurrentPageService} from "../../shared/current-page.service";
import * as pannellum from "pannellum";

@Component({
  moduleId: module.id,
  selector: 'tour-preview',
  templateUrl: 'tour-preview.component.html',
  styleUrls: ['tour-preview.component.css'],
  directives: [
    ROUTER_DIRECTIVES
  ]
})
export class TourPreviewComponent implements OnInit, OnDestroy, AfterViewInit {

  private sub:Subscription;
  private tour:Tour;

  constructor(private route:ActivatedRoute,
              private renderer:Renderer,
              private service:TourService,
              private currentPageService:CurrentPageService) {
  }

  ngOnInit() {
    this.currentPageService.extractTitle = () => "Virtualaus turo peržiūra";

    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.service.getTour(id).then(tour => {
        this.currentPageService.extractTitle = () => tour.name;
        this.tour = tour;
      });
    });

    setTimeout(() => {
        pannellum.pannellum.viewer('panorama', {
          "type": "equirectangular",
          "panorama": "https://pannellum.org/images/alma.jpg"
        });
      }
      , 0
    );

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
