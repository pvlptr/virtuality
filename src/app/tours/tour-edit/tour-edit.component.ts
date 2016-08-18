import {Component, OnInit, OnDestroy, ViewChild, ElementRef} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {TourService} from "../shared/tour.service";
import {Tour} from "../shared/tour.model";
import {Subscription} from "rxjs/Rx";
import {CurrentPageService} from "../../shared/current-page.service";
import {SimpleChange} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'tour-preview',
  templateUrl: 'tour-edit.component.html',
  styleUrls: ['tour-edit.component.css'],
})
export class TourEditComponent implements OnInit, OnDestroy {

  private sub: Subscription;
  private tour: Tour;

  @ViewChild('thumbnail') thumbnail: ElementRef;
  @ViewChild('panorama') panorama: ElementRef;

  constructor(public route: ActivatedRoute,
              private router: Router,
              private service: TourService,
              private currentPageService: CurrentPageService) {
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
    console.log('ngOnDestroy  ' + document.getElementById("panorama"));
    this.sub.unsubscribe();
  }

  onSave() {
    this.service.save(this.tour);
    this.router.navigate(["/tours"]);
  }

  onThumbnailChange(event) {
    let file = this.extractFile(event);
    this.tour.thumbnailUrl = 'thumbnails\\' + file.name;
    let place = this.thumbnail;
    this.loadUploadedImage(place, file);
  }

  onPanoramaChange(event) {
    let file = this.extractFile(event);
    this.tour.panoramaUrl =  'panoramas\\' + file.name;
    this.panoramaUrl = this.tour.panoramaUrl;
  }

  private extractFile(event): File {
    let files = event.srcElement.files;
    let file = files[0];
    return file;
  }

  private loadUploadedImage(place: ElementRef, file: File) {
    let reader = new FileReader();
    reader.onload = function (e) {
      place.nativeElement.setAttribute('src', e.target.result);
    };
    reader.readAsDataURL(file);
    console.log(place);
    console.log(file);
  }

  // only called for/if there is an @input variable set by parent.
  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    console.log('ngOnChanges edit');
}

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  //ngDoCheck() { console.log('ngDoCheck'); }

  ngAfterContentInit() { console.log('ngAfterContentInit');  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  //ngAfterContentChecked() { console.log('ngAfterContentChecked'); }

  ngAfterViewInit() { console.log('ngAfterViewInit'); }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  //ngAfterViewChecked() { console.log('ngAfterViewChecked'); }

  ngOnDestroy() { console.log('ngOnDestroy'); }

}
