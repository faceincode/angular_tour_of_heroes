import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Berto' },
      { id: 12, name: 'Robo' },
      { id: 13, name: 'Bertveloper' },
      { id: 14, name: 'Rubber Toe' },
      { id: 15, name: 'Kermit' },
      { id: 16, name: 'Ribbirt' },
      { id: 17, name: 'Waldo' },
      { id: 18, name: 'Bartholomeu' },
      { id: 19, name: 'Robert' },
      { id: 20, name: 'Roberto' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

  constructor() { }
}
