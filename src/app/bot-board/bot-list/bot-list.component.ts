import { Component, OnInit, OnDestroy } from '@angular/core';
import { Bot } from '../bot.model';
import { BotService } from '../bot.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-bot-list',
  templateUrl: './bot-list.component.html',
  styleUrls: ['./bot-list.component.scss'],
})
export class BotListComponent implements OnInit, OnDestroy {

  loadedBots: Bot[];
  private botsSub: Subscription;
  hide = false;

  constructor(public botService: BotService,
              public router: Router,
              private navCtrl: NavController) { }

  ngOnInit() {
    this.botsSub = this.botService.getBots()
      .subscribe((bots: Bot[]) => {
        this.loadedBots = bots;
      });
    console.log(this.loadedBots);
  }

  ngOnDestroy() {
    if (this.loadedBots) {
      this.botsSub.unsubscribe();
    }
  }

  showBot() {
    console.log(this.loadedBots);
  }

  nav(id: string) {
    this.navCtrl.navigateForward(['bot-board', id]);
  }
}
