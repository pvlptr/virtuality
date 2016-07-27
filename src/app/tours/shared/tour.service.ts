import { Injectable } from '@angular/core';
import { TOURS } from './index';

@Injectable()
export class TourService {

  constructor() { }

    getTours() {
        return Promise.resolve(TOURS);
    }  

}
