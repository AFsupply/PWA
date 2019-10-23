import { Component, OnInit, Input } from '@angular/core';
import { HomeSlideService } from './home-slide.service';
import { HomeSlide } from './home-slide.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-slide',
  templateUrl: './home-slide.component.html',
  styleUrls: ['./home-slide.component.scss'],
  providers: [HomeSlideService]
})
export class HomeSlideComponent implements OnInit {

  homeSlides: HomeSlide[];
  subscription: Subscription;

  sliderConfiguration = {
    spaceBetween: 10
  };

  @Input() category: string;

  constructor(public homeSlideService: HomeSlideService
  ) { }


  ngOnInit() {
    this.subscription = this.homeSlideService.homeSlidesChanged
      .subscribe((homeSlides: HomeSlide[]) => {
        this.homeSlides = homeSlides;
      });
    this.homeSlides = this.homeSlideService.getHomeSlides();
    console.log(this.homeSlides);
    this.homeSlides.forEach(homeSlide => {
      console.log(homeSlide.iconNames);
      homeSlide.iconNames.forEach(iconName => {
        console.log(iconName);
      });
    });
    this.category = 'presentation';
  }

}
