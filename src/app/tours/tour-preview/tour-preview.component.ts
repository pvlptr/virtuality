import {Component, OnInit, OnDestroy} from "@angular/core";
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
export class TourPreviewComponent implements OnInit, OnDestroy  {

  private sub:Subscription;
  private tour:Tour;

  constructor(private route:ActivatedRoute,
              private router:Router,
              private service:TourService,
              private currentPageService: CurrentPageService) {
  }

  ngOnInit() {
    this.currentPageService.extractTitle = () => "Virtualaus turo peržiūra";

    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.service.getTour(id).then(tour => {
        this.tour = tour;
        this.currentPageService.extractTitle = () => tour.name;
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
