import {Injectable} from "@angular/core";
import {Settings} from "./settings.model";

@Injectable()
export class SettingsService {
  private settings = new Settings();

  constructor() {
  }

  getSettings():Settings {
    return this.settings;
  }

  save(settings:Settings) {
    console.log("Saved:" + JSON.stringify(settings));
  }

}
