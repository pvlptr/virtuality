import {Component, OnInit, Output} from '@angular/core';
import EventEmitter = protractor.EventEmitter;
import {CurrentPageService} from "../shared/current-page.service";
import {MD_SIDENAV_DIRECTIVES} from "@angular2-material/sidenav/sidenav";
import {MD_LIST_DIRECTIVES} from "@angular2-material/list/list";
import {MD_CARD_DIRECTIVES} from "@angular2-material/card/card";
import {MdInput} from "@angular2-material/input/input";
import {MdCheckbox} from "@angular2-material/checkbox/checkbox";
import {MdRadioGroup, MdRadioButton} from "@angular2-material/radio/radio";
import {MdIcon} from "@angular2-material/icon/icon";
import {SettingsService} from "./shared/settings.service";
import {Settings} from "./shared/settings.model";

@Component({
  moduleId: module.id,
  selector: 'settings',
  templateUrl: 'settings.component.html',
  styleUrls: ['settings.component.css'],
  directives: [
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdInput,
    MdCheckbox,
    MdRadioGroup,
    MdRadioButton,
    MdIcon
  ]
})
export class SettingsComponent implements OnInit {

  settings:Settings;

  constructor(private currentPageService:CurrentPageService, private settingsService:SettingsService) {
  }

  ngOnInit() {
    this.currentPageService.extractTitle = () => "Nustatymai";
    this.settings = this.settingsService.getSettings();
  }

}
