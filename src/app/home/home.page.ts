import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() {}

  category: string;

  ngOnInit() {
    this.category = 'presentation';
    console.log(this.category);
  }

  onShowPresentationSlide() {
    'category: "presentation"';
    console.log();
  }

  onShowFabricationSlide() {
    'category: "fabrication"';
    console.log(this.category);
  }

}
