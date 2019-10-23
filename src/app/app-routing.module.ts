import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', loadChildren: './home/home.module#HomePageModule' },
  { path: 'life-board',
    loadChildren: './life-board/life-board.module#LifeBoardPageModule',
    canActivate: [AuthGuard]
  },
  { path: 'vegetable-library-board',
    loadChildren: './vegetable-library-board/vegetable-library-board.module#VegetableLibraryBoardPageModule',
    canActivate: [AuthGuard]
    /* children: [
      { path: 'vegetable-item',
        loadChildren: './vegetable-library-board/vegetable-item/vegetable-item.module#VegetableItemPageModule'
      },
      { path: 'vegetable-edit',
        loadChildren: './vegetable-library-board/vegetable-edit/vegetable-edit.module#VegetableEditPageModule'
      }
    ] */
  },
  { path: 'grow-area-board',
    loadChildren: './grow-area-board/grow-area-board.module#GrowAreaBoardPageModule',
    canActivate: [AuthGuard]
  },
  { path: 'bot-board',
    loadChildren: './bot-board/bot-board.module#BotBoardPageModule',
    canActivate: [AuthGuard]
  },
  { path: 'bot-edit', loadChildren: './bot-board/bot-edit/bot-edit.module#BotEditPageModule' },
  { path: 'bot-item', loadChildren: './botBoard/bot-item/bot-item.module#BotItemPageModule' },
  { path: 'bot-item', loadChildren: './bot-board/bot-item/bot-item.module#BotItemPageModule' },
  /* { path: '**',
    redirectTo: 'home'
  }, */
/*   { path: 'vegetable-kind-board', loadChildren: './vegetable-library-board/vegetable-kind-board/vegetable-kind-board.module#VegetableKindBoardPageModule' },
  { path: 'vegetable-kind-item', loadChildren: './vegetable-library-board/vegetable-kind-board/vegetable-kind-item/vegetable-kind-item.module#VegetableKindItemPageModule' },
  { path: 'vegetable-kind-edit', loadChildren: './vegetable-library-board/vegetable-kind-board/vegetable-kind-edit/vegetable-kind-edit.module#VegetableKindEditPageModule' } */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
