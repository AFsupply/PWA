import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

import { Vegetable } from './vegetable.model';
import { VegetableKind } from './vegetable-kind-board/vegetable-kind.model';
import { take, map } from 'rxjs/operators';
import { platformCoreDynamicTesting } from '@angular/platform-browser-dynamic/testing/src/platform_core_dynamic_testing';

@Injectable({
  providedIn: 'root'
})

export class VegetableService {

  private vegetables = new BehaviorSubject<Vegetable[]> ([
    new Vegetable(
      '1',
      'Carot',
      60,
      'https://mqflavor.com/wp-content/uploads/2018/06/150.huongcarot-1.jpg',
      'addTime',
      30,
      50,
      new VegetableKind ('Racine longue', 'Racine longue  egergergg gergergregergererg')
    ),
    new Vegetable(
      '2',
      'Radis',
      30,
      'https://mqflavor.com/wp-content/uploads/2018/06/150.huongcarot-1.jpg',
      'addTime',
      15,
      25,
      new VegetableKind ('Racine ronde', 'Racine ronde  egergergg gergergregergererg')
    ),
    new Vegetable(
      '2',
      'Radis',
      30,
      'https://mqflavor.com/wp-content/uploads/2018/06/150.huongcarot-1.jpg',
      'addTime',
      15,
      25,
      new VegetableKind ('Racine ronde', 'Racine ronde  egergergg gergergregergererg')
    ),
    new Vegetable(
      '2',
      'Radis',
      30,
      'https://mqflavor.com/wp-content/uploads/2018/06/150.huongcarot-1.jpg',
      'addTime',
      15,
      25,
      new VegetableKind ('Racine ronde', 'Racine ronde  egergergg gergergregergererg')
    ),
    new Vegetable(
      '2',
      'Radis',
      30,
      'https://mqflavor.com/wp-content/uploads/2018/06/150.huongcarot-1.jpg',
      'addTime',
      15,
      25,
      new VegetableKind ('Racine ronde', 'Racine ronde  egergergg gergergregergererg')
    ),
    new Vegetable(
      '2',
      'Radis',
      30,
      'https://mqflavor.com/wp-content/uploads/2018/06/150.huongcarot-1.jpg',
      'addTime',
      15,
      25,
      new VegetableKind ('Racine ronde', 'Racine ronde  egergergg gergergregergererg')
    ),
    new Vegetable(
      '2',
      'Radis',
      30,
      'https://mqflavor.com/wp-content/uploads/2018/06/150.huongcarot-1.jpg',
      'addTime',
      15,
      25,
      new VegetableKind ('Racine ronde', 'Racine ronde  egergergg gergergregergererg')
    ),
    new Vegetable(
      '2',
      'Radis',
      30,
      'https://mqflavor.com/wp-content/uploads/2018/06/150.huongcarot-1.jpg',
      'addTime',
      15,
      25,
      new VegetableKind ('Racine ronde', 'Racine ronde  egergergg gergergregergererg')
    ),
  ]);

/* 
  get Vegetables() {
    return this.vegetables.asObservable();
} */

  constructor(
    //private vegetable: Vegetable
    ) { }

 /*  setVegetables(vegetables: Vegetable[]) {
      console.log(vegetables);
      this.vegetables = vegetables;
      this.vegetablesChanged.next(this.vegetables.slice());
  }
 */
  getVegetables() {
      return this.vegetables.asObservable();
  }

  getVegetable(id: string) {
      console.log(id);
      return this.vegetables.pipe(take(1), map(vegetables => {
         return {...vegetables.find (v => v.id === id)};
      }));
  }

  addVegetable(vegetable: Vegetable) {
      this.vegetables.pipe(take(1)).subscribe((vegetables: Vegetable[]) => {
        this.vegetables.next(vegetables.concat(vegetable));
      });
    }

  updateVegetable(id: number, newVegetable: Vegetable) {
      this.vegetables[id] = newVegetable;
  }

}
