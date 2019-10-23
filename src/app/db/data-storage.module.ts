import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    CommonModule,
    IonicModule
  ],
  providers: [HttpClient]
})
export class DataStorageModule { }
