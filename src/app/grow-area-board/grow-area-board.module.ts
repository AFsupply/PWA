import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GrowAreaBoardPage } from './grow-area-board.page';
import { SharedModule } from '../shared-module/shared.module';
import { GrowAreaBoardMenuComponent } from './grow-area-board-menu/grow-area-board-menu.component';
import { GrowAreaListComponent } from './grow-area-list/grow-area-list.component';

const routes: Routes = [
  {
    path: '',
    component: GrowAreaBoardPage
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
  declarations: [GrowAreaBoardPage, GrowAreaBoardMenuComponent, GrowAreaListComponent]
})
export class GrowAreaBoardPageModule {}
