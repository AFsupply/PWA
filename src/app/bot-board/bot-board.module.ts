import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BotBoardPage } from './bot-board.page';
import { SharedModule } from '../shared-module/shared.module';
import { BotListComponent } from './bot-list/bot-list.component';
import { BotBoardMenuComponent } from './bot-board-menu/bot-board-menu.component';

const routes: Routes = [
  {
    path: '',
    component: BotBoardPage,
    children: [
      {
        path: 'newBot',
        loadChildren: './bot-edit/bot-edit.module#BotEditPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BotBoardPage, BotListComponent, BotBoardMenuComponent]
})
export class BotBoardPageModule {}
