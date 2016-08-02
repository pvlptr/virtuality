import { Component, Input } from '@angular/core';
import { Tour } from '../../shared/index';
import {MdButton} from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';


@Component({
  moduleId: module.id,
  selector: 'tours-list-item',
  templateUrl: 'tours-list-item.component.html',
  styleUrls: ['tours-list-item.component.css'],
  providers: [MdIconRegistry],
  directives: [
    MdButton,
    MdIcon
  ]
})
export class ToursListItemComponent {
  @Input()
  tour: Tour;
  constructor() { }
}