import {Injectable} from "@angular/core";
import {FACETS} from "./mock-facets";
import {Facet} from "./index";

@Injectable()
export class FacetService {

  constructor() {
  }

  getFacets() {
    return new Promise<Facet[]>(
      // resolve => resolve(TOURS)
      resolve => setTimeout(() => resolve(FACETS), 2000)
    );
  }

}
