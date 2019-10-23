import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Vegetable } from '../vegetable.model';
import { VegetableService } from '../vegetable.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-vegetable-list',
  templateUrl: './vegetable-list.component.html',
  styleUrls: ['./vegetable-list.component.scss']
})
export class VegetableListComponent implements OnInit, OnDestroy {

  loadedVegetables: Vegetable[];
  private vegetablesSub: Subscription;
  hide = false;

  constructor(public vegetableService: VegetableService,
              public router: Router,
              private navCtrl: NavController) { }

  ngOnInit() {
    this.vegetablesSub = this.vegetableService.getVegetables()
      .subscribe((vegetables: Vegetable[]) => {
        this.loadedVegetables = vegetables;
      });
    console.log(this.loadedVegetables);
  }

  ngOnDestroy() {
    if (this.loadedVegetables) {
      this.vegetablesSub.unsubscribe();
    }
  }

  nav(id: string) {
    this.navCtrl.navigateForward(['vegetable-library-board', id]);
  }
}
