import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BotEditPage } from './bot-edit.page';
import { SharedModule } from 'src/app/shared-module/shared.module';

const routes: Routes = [
  {
    path: '',
    component: BotEditPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BotEditPage]
})
export class BotEditPageModule {}
