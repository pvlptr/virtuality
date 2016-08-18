import {Component, OnInit, ViewChild, ElementRef, Input, SimpleChange, OnChanges} from "@angular/core";

import * as pannellumJS from "pannellum";


@Component({
  moduleId: module.id,
  selector: 'panorama',
  templateUrl: 'panorama.component.html',
  styleUrls: ['panorama.component.css']
})
export class PanoramaComponent implements OnInit, OnChanges {

  @ViewChild('panorama') panorama: ElementRef;
  @Input() panoramaUrl: string;
  @Input() panoramaConfig: any;

  show: boolean = false;

  constructor() {
  }

  ngOnInit() {
    // this.init();
  }

  init(): void {
    if (this.panoramaUrl) {
      pannellumJS.pannellum.viewer(this.panorama.nativeElement, {
        "type": "equirectangular",
        "panorama": this.panoramaUrl,
        "autoLoad": true,
        "compass": true
      });
    } else {
      pannellumJS.pannellum.viewer(this.panorama.nativeElement, this.panoramaConfig);
    }
  }

  // only called for/if there is an @input variable set by parent.
  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    this.show = false;
    /*o gal galima geriau?*/
    setTimeout(
      () => {
        this.show = true;
        setTimeout(() => {
          this.init();
        }, 0);
      }
      , 0);

  }
}
