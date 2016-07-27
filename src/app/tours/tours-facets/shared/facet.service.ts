import { Injectable } from '@angular/core';
import { FACETS } from './mock-facets';

@Injectable()
export class FacetService {

  constructor() { }

    getFacets() {
        return Promise.resolve(FACETS);
    }  

}
