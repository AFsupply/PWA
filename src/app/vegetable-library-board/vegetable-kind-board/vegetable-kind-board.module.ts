import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VegetableKindBoardPage } from './vegetable-kind-board.page';
import { VegetableKindListComponent } from './vegetable-kind-list/vegetable-kind-list.component';

const routes: Routes = [
  {
    path: '',
    component: VegetableKindBoardPage
    /* children: [
      {path: ':vegetableKindId', loadChildren : './vegetable-kind-item/vegetable-kind-item.module#VegetableKindItemModule'}
    ] */
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VegetableKindBoardPage, VegetableKindListComponent]
})
export class VegetableKindBoardPageModule {}
