import { Component, OnInit } from '@angular/core';
import {  FacetItem,Facet, FacetService} from './shared/index';
import {MdButton} from '@angular2-material/button';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MdCheckbox} from '@angular2-material/checkbox';

@Component({
    moduleId: module.id,    
    selector: 'tours-facets',
    templateUrl: 'tours-facets.component.html',
    styleUrls: ['tours-facets.component.css'],
    directives: [
        MD_LIST_DIRECTIVES,
        MD_CARD_DIRECTIVES,
        MdButton,
        MdIcon,
        MdCheckbox
    ],    
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