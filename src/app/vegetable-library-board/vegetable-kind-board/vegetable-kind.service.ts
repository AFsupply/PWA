import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { VegetableKind } from './vegetable-kind.model';



@Injectable({
  providedIn: 'root'
})
export class VegetableKindService {

  vegetableKindsChanged = new Subject<VegetableKind[]>();

  constructor(private vegetableKind: VegetableKind,
              private vegetableKinds: VegetableKind []
    ) { }

  setVegetableKinds(vegetableKinds: VegetableKind[]) {
      console.log(vegetableKinds);
      this.vegetableKinds = vegetableKinds;
      this.vegetableKindsChanged.next(this.vegetableKinds.slice());
  }

  getVegetableKinds() {
      return this.vegetableKinds.slice();
  }

  getVegetableKind(index: number) {
      console.log(index);
      return this.vegetableKinds[index];
  }

  addVegetableKind(vegetableKind: VegetableKind) {
      this.vegetableKinds.push(vegetableKind);
      this.vegetableKindsChanged.next(this.vegetableKinds.slice());
    }

  updateVegetableKind(index: number, newVegetableKind: VegetableKind) {
      this.vegetableKind[index] = newVegetableKind;
      this.vegetableKindsChanged.next(this.vegetableKinds.slice());
  }
}
