import { Component, OnInit } from '@angular/core';
import {  FacetItem,Facet, FacetService} from './shared/index';

@Component({
    moduleId: module.id,    
    selector: 'tours-facets',
    templateUrl: 'tours-facets.component.html',
    styleUrls: ['tours-facets.component.css'],
    providers: [FacetService]
})
export class ToursFacetsComponent implements OnInit {
    facets: Facet[];
    constructor(private facetService: FacetService) { }
    getFacets() {
        this.facets = [];
        this.facetService.getFacets().then(facets => this.facets = facets);
    }
    ngOnInit() {
        this.getFacets();
    }
}