import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VegetableKindEditPage } from './vegetable-kind-edit.page';

const routes: Routes = [
  {
    path: '',
    component: VegetableKindEditPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VegetableKindEditPage]
})
export class VegetableKindEditPageModule {}
