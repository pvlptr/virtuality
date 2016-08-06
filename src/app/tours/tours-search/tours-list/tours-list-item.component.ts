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
    console.log('arenderer: ' + this.renderer)
    console.log('atourImage: ' + this.tourImage);
    if (this.tour.updloadedThumbnail) {
      // let reader = new FileReader();
      //
      // // Add an event listener to deal with the file when the reader is complete
      // reader.addEventListener("load", (event) => {
      //
      //   this.tourImage.nativeElement.setAttribute('src', event.target.result);
      //   // Get the event.target.result from the reader (base64 of the image)
      //
      //
      //   // Resize the image
      //  // var resized_img = this.resize(img);
      //
      //   // Push the img src (base64 string) into our array that we display in our html template
      //  // this.file_srcs.push(resized_img);
      // }, false);

      // reader.readAsDataURL(input.files[i]);

      let reader = new FileReader();
      let tourImage = this.tourImage;
      console.log("01tourImage:" + tourImage);
      console.log('this tourImage: ' + this.tourImage);

      reader.onload = function (e) {
        // console.log('this.tour.updloadedThumbnail: ' + this.tour);
        // console.log('this.tour.updloadedThumbnail: ' + this.tour.updloadedThumbnail);
        // console.log('e.target.result: ' + e.target.result);
        console.log("2tourImage:" + tourImage);
        console.log('this tourImage: ' + this.tourImage);
        // console.log(reader.result);
        // console.log('tourImage: ' + this.tourImage);
         tourImage.nativeElement.setAttribute('src', e.target.result);

      }
      reader.readAsDataURL(this.tour.updloadedThumbnail);
    }

  }

  onDelete(tour:Tour) {
    this.service.delete(tour);
  }


}
