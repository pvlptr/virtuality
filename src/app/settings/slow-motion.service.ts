import {Injectable} from "@angular/core";
import {SettingsService} from "./shared/settings.service";

@Injectable()
export class SlowMotionService {

  constructor(private settingsService:SettingsService) {
  }

  delayResult<T>(value:T):Promise<T> {
    if (this.settingsService.getSettings().slowMotion) {
      let delay = this.settingsService.getSettings().calculateDelay()
      console.log('delaying result after ' + delay);
      return new Promise<T>(resolve => setTimeout(
        () => {
          console.log('delayed result ready');
          resolve(value);
        }
        , delay));
    } else {
      console.log('direct result');
      return new Promise<T>(resolve => resolve(value));
    }

  }

  sleep() {
    console.log('sleep');
    if (this.settingsService.getSettings().slowMotion) {
      this.sleepFor(this.settingsService.getSettings().calculateDelay());
    }

  }

  private sleepFor(sleepDuration:number) {
    let now = new Date().getTime();
    while (new Date().getTime() < now + sleepDuration) { /* do nothing */
    }
  }
}
