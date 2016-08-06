import {Injectable} from "@angular/core";
import {FACETS} from "./mock-facets";
import {Facet} from "./index";
import {SlowMotionService} from "../../../../settings/slow-motion.service";

@Injectable()
export class FacetService {

  constructor(private slowMotionService:SlowMotionService) {
  }

  getFacets(): Promise<Facet[]> {
    return this.slowMotionService.delayResult(FACETS);
  }

}
