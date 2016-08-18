import {Component, OnInit} from "@angular/core";
import {Facet, FacetService} from "./shared/index";

@Component({
    moduleId: module.id,
    selector: 'tours-facets',
    templateUrl: 'tours-facets.component.html',
    styleUrls: ['tours-facets.component.css'],

    providers: [FacetService]
})
export class ToursFacetsComponent implements OnInit {
    facets: Facet[];
    loaded: boolean;
    constructor(private facetService: FacetService) { }
    getFacets() {
        this.facets = [];
        this.loaded = false;
        this.facetService.getFacets().then(facets => {
            this.facets = facets;
            this.loaded = true;
        });
    }
    ngOnInit() {
        this.getFacets();
    }
}
