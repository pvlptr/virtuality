import {Component, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {TourService} from "../shared/tour.service";
import {Tour} from "../shared/tour.model";

@Component({
  moduleId: module.id,
  selector: 'tour-preview',
  templateUrl: 'tour-preview.component.html',
  styleUrls: ['tour-preview.component.css']
})
export class TourPreviewComponent implements OnInit, OnDestroy  {

  private sub:any;
  private tour:Tour;

  constructor(private route:ActivatedRoute,
              private router:Router,
              private service:TourService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.service.getTour(id).then(tour => this.tour = tour);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
