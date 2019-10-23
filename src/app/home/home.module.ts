import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomeSlideComponent } from './home-slide/home-slide.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared-module/shared.module';
import { SigninComponent } from '../auth/signin/signin.component';
import { SignupComponent } from '../auth/signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    HomePage,
    HomeSlideComponent
  ],
  entryComponents: [SigninComponent, SignupComponent],
  exports: []
})
export class HomePageModule {}
