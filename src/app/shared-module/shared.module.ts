import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AuthModule } from '../auth/auth.module';
import { ImagePickerComponent } from './image-picker/image-picker.component';
import { MapModalComponent } from './map-modal/map-modal.component';
import { DataStorageModule } from '../db/data-storage.module';
import { NgxPicaModule } from '@digitalascetic/ngx-pica';

@NgModule({
  declarations: [ImagePickerComponent, MapModalComponent],
  exports: [
    AuthModule,
    DataStorageModule,
    ImagePickerComponent,
    MapModalComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    AuthModule,
    NgxPicaModule
  ],
  providers: [],
  entryComponents: [MapModalComponent]
})
export class SharedModule { }
