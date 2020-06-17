import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Roberto' },
      { id: 12, name: 'Rubbert' },
      { id: 13, name: 'Berto' },
      { id: 14, name: 'Robert' },
      { id: 15, name: 'Bertveloper' },
      { id: 16, name: 'Rubber Toes' },
      { id: 17, name: 'Bartholomeu' },
      { id: 18, name: 'Waldo' },
      { id: 19, name: 'Kermit' },
      { id: 20, name: 'Robo' }
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
