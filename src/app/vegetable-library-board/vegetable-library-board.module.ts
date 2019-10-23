import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VegetableLibraryBoardPage } from './vegetable-library-board.page';
import { VegetableItemPage } from './vegetable-item/vegetable-item.page';
import { VegetableListComponent } from './vegetable-list/vegetable-list.component';
import { VegetableEditPage } from './vegetable-edit/vegetable-edit.page';
import { VegetableLibraryBoardMenuComponent } from './vegetable-library-board-menu/vegetable-library-board-menu.component';
import { SharedModule } from '../shared-module/shared.module';

const routes: Routes = [
  {
    path: '',
    component: VegetableLibraryBoardPage,
    children: [
          { path: 'vegetable-kind-board',
            loadChildren: './vegetable-kind-board/vegetable-kind-board.module#VegetableKindBoardPageModule'
          },
          { path: ':vegetableId',
            loadChildren: './vegetable-item/vegetable-item.module#VegetableItemPageModule'}
        ]
      // { path: 'vegetable-item',
      //   loadChildren: './vegetable-library-board/vegetable-item/vegetable-item.module#VegetableItemPageModule'
      // },
      // { path: 'vegetable-edit',
      //   loadChildren: './vegetable-library-board/vegetable-edit/vegetable-edit.module#VegetableEditPageModule'
      // }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    VegetableLibraryBoardPage,
    VegetableListComponent,
    VegetableLibraryBoardMenuComponent
  ]
})
export class VegetableLibraryBoardPageModule {}
