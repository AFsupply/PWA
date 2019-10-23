import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LifeBoardPage } from './life-board.page';
import { SharedModule } from '../shared-module/shared.module';
import { SigninComponent } from '../auth/signin/signin.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { LifeBoardMenuComponent } from './life-board-menu/life-board-menu.component';
import { LastBotAddedComponent } from './last-bot-added/last-bot-added.component';
import { LastHarvestVegetableComponent } from './last-harvest-vegetable/last-harvest-vegetable.component';
import { LastSowVegetableComponent } from './last-sow-vegetable/last-sow-vegetable.component';
import { LastVegetableKindAddedComponent } from './last-vegetable-kind-added/last-vegetable-kind-added.component';

const routes: Routes = [
  {
    path: '',
    component: LifeBoardPage
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
  declarations: [LifeBoardPage,
                 LifeBoardMenuComponent,
                 LastBotAddedComponent,
                 LastHarvestVegetableComponent,
                 LastSowVegetableComponent,
                 LastVegetableKindAddedComponent
  ],
  entryComponents: [SigninComponent, SignupComponent]
})
export class LifeBoardPageModule {}
