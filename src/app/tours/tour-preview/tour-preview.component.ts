import {Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef, Renderer} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {TourService} from "../shared/tour.service";
import {Tour} from "../shared/tour.model";
import {Subscription} from "rxjs/Rx";
import {CurrentPageService} from "../../shared/current-page.service";

@Component({
  moduleId: module.id,
  selector: 'tour-preview',
  templateUrl: 'tour-preview.component.html',
  styleUrls: ['tour-preview.component.css']
})
export class TourPreviewComponent implements OnInit, OnDestroy {

  @ViewChild('panorama') panorama: ElementRef;

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
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }



}
