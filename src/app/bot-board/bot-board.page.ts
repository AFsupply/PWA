import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BotService } from './bot.service';

@Component({
  selector: 'app-bot-board',
  templateUrl: './bot-board.page.html',
  styleUrls: ['./bot-board.page.scss'],
})
export class BotBoardPage implements OnInit {

  constructor(public router: Router,
              private botService: BotService
              ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.botService.getStoredBots().subscribe();
  }

}
