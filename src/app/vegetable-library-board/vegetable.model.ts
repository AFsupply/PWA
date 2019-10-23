import { VegetableKind } from './vegetable-kind-board/vegetable-kind.model';

export class Vegetable {
constructor (public id: string,
             public name: string,
             public growTime: number,
             public imagePath: string,
             public seedObtention: string,
             public height: number,
             public diam: number,
             public vegetableKind: VegetableKind) {}
}
