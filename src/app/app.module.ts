import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { SharedModule } from './shared-module/shared.module';
import { HomePageModule } from './home/home.module';
import { LifeBoardPageModule } from './life-board/life-board.module';
import { UserMenuComponent } from './user-menu/user-menu.component';

@NgModule({
  declarations: [AppComponent, UserMenuComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    SharedModule,
    HomePageModule,
    LifeBoardPageModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
