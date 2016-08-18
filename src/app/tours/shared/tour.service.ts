import {Injectable} from "@angular/core";
import {Tour, TOURS} from "./index";
import {SettingsService} from "../../settings/shared/settings.service";
import {SlowMotionService} from "../../settings/slow-motion.service";

@Injectable()
export class TourService {

  constructor(private slowMotionService:SlowMotionService) {
  }

  getTours():Promise<Tour[]> {
    return this.slowMotionService.delayResult(TOURS);
  }

  getTour(id:number):Promise<Tour> {
    return this.slowMotionService.delayResult(TOURS.filter(tour => tour.id === id)[0]);
  }

  save(tour:Tour) {
    this.slowMotionService.sleep();
    if (tour.id == null) {
      tour.id = TOURS.length + 1;
      TOURS.push(tour);
    }
    console.log("Saved tour:" + JSON.stringify(tour.id));
  }

  delete(tour:Tour) {
    this.slowMotionService.sleep();
    TOURS.splice(TOURS.indexOf(tour), 1);
    console.log("Deleted:" + JSON.stringify(tour));
  }


}
