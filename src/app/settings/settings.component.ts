import {Component, OnInit, Output} from '@angular/core';
import EventEmitter = protractor.EventEmitter;
import {CurrentPageService} from "../shared/current-page.service";
import {SettingsService} from "./shared/settings.service";
import {Settings} from "./shared/settings.model";

@Component({
  moduleId: module.id,
  selector: 'settings',
  templateUrl: 'settings.component.html',
  styleUrls: ['settings.component.css'],
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
