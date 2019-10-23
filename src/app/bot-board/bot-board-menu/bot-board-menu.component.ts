import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bot-board-menu',
  templateUrl: './bot-board-menu.component.html',
  styleUrls: ['./bot-board-menu.component.scss'],
})
export class BotBoardMenuComponent implements OnInit {

  constructor(private navCtrl: NavController
              ) { }

  ngOnInit() {}

  onClick() {
    this.navCtrl.navigateForward('/vegetable-library-board/vegetable-kind-board');
  }

  onNewBot() {
    this.navCtrl.navigateForward('bot-board/newBot');
  }

}
