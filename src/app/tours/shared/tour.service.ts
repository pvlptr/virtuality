import {Injectable} from "@angular/core";
import {Tour, TOURS} from "./index";

@Injectable()
export class TourService {

    constructor() { }

    getTours() {
        return new Promise<Tour[]>(
            // resolve => resolve(TOURS)
            resolve => setTimeout(() => resolve(TOURS), 1000)
        );

    }

}
