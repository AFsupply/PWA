import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VegetableKindItemPage } from './vegetable-kind-item.page';

const routes: Routes = [
  {
    path: '',
    component: VegetableKindItemPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VegetableKindItemPage]
})
export class VegetableKindItemPageModule {}
