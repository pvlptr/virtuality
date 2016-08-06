import {Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer} from "@angular/core";
import {Tour} from "../../shared/index";
import {MdButton} from "@angular2-material/button";
import {MdIcon} from "@angular2-material/icon";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {TourService} from "../../shared/tour.service";

@Component({
  moduleId: module.id,
  selector: 'tours-list-item',
  templateUrl: 'tours-list-item.component.html',
  styleUrls: ['tours-list-item.component.css'],
  directives: [
    MdButton,
    MdIcon,
    ROUTER_DIRECTIVES
  ]
})
export class ToursListItemComponent implements AfterViewInit {
  @Input()
  tour:Tour;

  @ViewChild('tourImage') tourImage:ElementRef;

  constructor(private service:TourService, private renderer:Renderer) {
  }

  ngAfterViewInit() {
    if (this.tour.updloadedThumbnail) {

      let reader = new FileReader();
      let tourImage = this.tourImage;
      let renderer = this.renderer;

      reader.onload = function (e) {
        let target:any = e.target;
        renderer.setElementAttribute(tourImage.nativeElement, 'src', target.result);
      }
      reader.readAsDataURL(this.tour.updloadedThumbnail);
    }
  }

  onDelete(tour:Tour) {
    this.service.delete(tour);
  }
}
