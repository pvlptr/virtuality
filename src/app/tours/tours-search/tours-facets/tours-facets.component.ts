import {Component, OnInit} from "@angular/core";
import {Facet, FacetService} from "./shared/index";
import {MdButton} from "@angular2-material/button";
import {MD_LIST_DIRECTIVES} from "@angular2-material/list";
import {MD_CARD_DIRECTIVES} from "@angular2-material/card";
import {MdIcon} from "@angular2-material/icon";
import {MdCheckbox} from "@angular2-material/checkbox";
import {MD_PROGRESS_CIRCLE_DIRECTIVES} from "@angular2-material/progress-circle";

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
        MdCheckbox,
        MD_PROGRESS_CIRCLE_DIRECTIVES
    ],
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
