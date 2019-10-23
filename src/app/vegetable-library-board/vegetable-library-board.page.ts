import { Component, OnInit, Input } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { VegetableService } from './vegetable.service';
import { Vegetable } from './vegetable.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vegetable-library-board',
  templateUrl: './vegetable-library-board.page.html',
  styleUrls: ['./vegetable-library-board.page.scss'],
  providers: [VegetableService]
})
export class VegetableLibraryBoardPage implements OnInit {

  @Input() vegetables: Vegetable[];

  constructor(private menu: MenuController,
              public router: Router
              ) { }

  ngOnInit() {
  }

  openUserMenu() {
    this.menu.open('userMenu');
  }

}
