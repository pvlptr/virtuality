import {Component, Input} from "@angular/core";
import {Tour} from "../../shared/index";
import {MdButton} from "@angular2-material/button";
import {MdIcon} from "@angular2-material/icon";
import {ROUTER_DIRECTIVES} from "@angular/router";

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
export class ToursListItemComponent {
  @Input()
  tour:Tour;

  constructor() {
  }

  onDelete(tour:Tour) {
    // todo
  }

}
