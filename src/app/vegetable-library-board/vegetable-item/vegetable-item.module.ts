import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VegetableItemPage } from './vegetable-item.page';
import { SharedModule } from '../../shared-module/shared.module';

const routes: Routes = [
  {
    path: '',
    component: VegetableItemPage
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
  declarations: [VegetableItemPage]
})
export class VegetableItemPageModule {}
