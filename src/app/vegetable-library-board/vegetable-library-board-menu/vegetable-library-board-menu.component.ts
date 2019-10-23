import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavController } from '@ionic/angular';
import { VegetableKindBoardPage } from '../vegetable-kind-board/vegetable-kind-board.page';

@Component({
  selector: 'app-vegetable-library-board-menu',
  templateUrl: './vegetable-library-board-menu.component.html',
  styleUrls: ['./vegetable-library-board-menu.component.scss'],
})
export class VegetableLibraryBoardMenuComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private navCtrl: NavController
              ) { }

  ngOnInit() {}

  onClick() {
    this.navCtrl.navigateForward('/vegetable-library-board/vegetable-kind-board');
  }

}
