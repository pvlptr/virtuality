import {Injectable} from "@angular/core";
import {Tour, TOURS} from "./index";

@Injectable()
export class TourService {

  constructor() {
  }

  getTours():Promise<Tour[]> {
    return new Promise<Tour[]>(
      // resolve => resolve(TOURS)
      resolve => setTimeout(() => resolve(TOURS), 1000)
    );
  }

  getTour(id:number):Promise<Tour> {
    return new Promise<Tour>(
      // resolve => resolve(TOURS[1)
      resolve => setTimeout(() => resolve(
        TOURS.filter(tour => tour.id === id)[0]
        )
        , 1000)
    );
  }

}
