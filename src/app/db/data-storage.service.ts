import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';



import { VegetableService } from '../vegetable-library-board/vegetable.service';
import { VegetableKindService } from '../vegetable-library-board/vegetable-kind-board/vegetable-kind.service';
import { HomeSlideService } from '../home/home-slide/home-slide.service';
import { HomeSlide } from '../home/home-slide/home-slide.model';
import { Bot } from '../bot-board/bot.model';



@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient,
              /* private vegetableService: VegetableService,
              private vegetableKindService: VegetableKindService, */
              private homeSlideService: HomeSlideService,
              ) { }

  storageMode: string;
  strorageMode = 'firebase';

/*   storeVegetables() {
    return this.http.put('https://techsc-14294.firebaseio.com/articles.json', this.vegetableService.getVegetables());
  } */

/*   getVegetables() {
    this.http.get<Vegetable[]>('https://techsc-14294.firebaseio.com/articles.json')
      .pipe(map(
        (vegetables) => {
          return vegetables;
        }
      ), catchError(error => {
        return throwError('Something went wrong', error);
      }))
        .subscribe(
          (vegetables: Vegetable[]) => {
            this.vegetableService.setVegetables(vegetables);
          }
        );
  } */

  /* storeVegetableKinds() {
    return this.http.put('https://techsc-14294.firebaseio.com/articles.json', this.vegetableKindService.getVegetableKinds());
  }

  getVegetableKinds() {
    this.http.get<VegetableKind[]>('https://techsc-14294.firebaseio.com/articles.json')
      .pipe(map(
        (vegetableKinds) => {
          return vegetableKinds;
        }
      ), catchError(error => {
        return throwError('Something went wrong', error);
      }))
        .subscribe(
          (vegetableKinds: VegetableKind[]) => {
            this.vegetableKindService.setVegetableKinds(vegetableKinds);
          }
        );
  } */

  storeHomeSlides() {
    if (this.storageMode === 'firebase' ) {
      return this.http.put('https://autonomfoodsupply.firebaseio.com/homeSlides.json', this.homeSlideService.getHomeSlides());
    }
  }

  getHomeSlides() {
    this.http.get<HomeSlide[]>('https://autonomfoodsupply.firebaseio.com/homeSlides.json')
      .pipe(map(
        (homeSlides) => {
          return homeSlides;
        }
      ), catchError(error => {
        return throwError('Something went wrong', error);
      }))
        .subscribe(
          (homeSlides: HomeSlide[]) => {
            this.homeSlideService.setHomeSlides(homeSlides);
          }
        );
  }

  storeBot(bot: Bot) {
    if (this.storageMode === 'firebase' ) {
      return this.http.put('https://autonomfoodsupply.firebaseio.com/bots.json', {...bot, id: null }).pipe(tap( resData => {
        console.log(resData);
      }));
    }
  }

}

