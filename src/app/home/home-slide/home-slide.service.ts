import { Injectable } from '@angular/core';
import { HomeSlide } from './home-slide.model';
import { Subject } from 'rxjs';

@Injectable({
   providedIn: 'root'
 }
)

export class HomeSlideService {

  private homeSlides: HomeSlide[] = [
    new HomeSlide(
        'Qu\'est ce que c\'est ?',
// tslint:disable-next-line: max-line-length
        'Autonome Food Supply est un ensemble d\'outils de machines servant à produire de la nourriture. Il est conçu avec des outils open source et est lui même open-source pour que vous puissiez le fabriquer vous même. Cependant, si vous n\'avez pas le temps ou le materiel de fabrication nécessaire, nous pouvons vous fournir un kit de démarrage. Toutefois, Autonome Food Supply est conçu pour être modulable afin de s\'adapter à un maximun d\'espace de culture et de variétés cultivables. Cela pour correspondre au mieux à vos besoins.',
        ['menu', 'home']
    ),
    new HomeSlide(
        'Comment l\'obtenir ?',
        'gregergergergergergegergegergerge',
        ['globe', 'nutrition']
        )
  ];


  homeSlidesChanged = new Subject<HomeSlide[]>();

  constructor(// private homeSlide: HomeSlide,
              // private homeSlides: HomeSlide[]
    ) { }

  setHomeSlides(homeSlides: HomeSlide[]) {
    console.log(homeSlides);
    this.homeSlides = homeSlides;
    this.homeSlidesChanged.next(this.homeSlides.slice());
  }

  getHomeSlides() {
    console.log(this.homeSlides);
    return this.homeSlides.slice();
  }

  getHomeSlide(index: number) {
    console.log(index);
    return this.homeSlides[index];
  }

  addHomeSlide(homeSlide: HomeSlide) {
    this.homeSlides.push(homeSlide);
    this.homeSlidesChanged.next(this.homeSlides.slice());
  }

  updateHomeSlide(index: number, newHomeSlide: HomeSlide) {
    this.homeSlides[index] = newHomeSlide;
    this.homeSlidesChanged.next(this.homeSlides.slice());
  }

}
