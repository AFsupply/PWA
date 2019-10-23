import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';
import { Capacitor, Plugins, CameraSource, CameraResultType} from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { NgxPicaService, NgxPicaErrorInterface, NgxPicaResizeOptionsInterface } from '@digitalascetic/ngx-pica';
import { AspectRatioOptions } from '@digitalascetic/ngx-pica/src/ngx-pica-resize-options.interface';

/* interface AspectRatioOptions {
  keepAspectRatio: boolean;
  forceDimensions?: boolean;
} */
/* interface NgxPicaResizeOptionsInterface {
  aspectRatio?: AspectRatioOptions;
  quality?: number;
  alpha?: boolean;
  unsharpAmount?: number;
  unsharpRadius?: number;
  unsharpThreshold?: number;
} */


@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.scss'],
})
export class ImagePickerComponent implements OnInit {
  @ViewChild('filePicker') filePickerRef: ElementRef<HTMLInputElement>;
  @Output() imagePick = new EventEmitter<string | File>();
  @Input() showPreview = false;
  selectedImage: string;
  usePicker = false;

  constructor(private plateform: Platform,
              private _ngxPicaService: NgxPicaService
              ) { }

  ngOnInit() {
    console.log('Mobile: ', this.plateform.is('mobile'));
    console.log('Hybrid: ', this.plateform.is('hybrid'));
    console.log('iOS: ', this.plateform.is('ios'));
    console.log('Android: ', this.plateform.is('android'));
    console.log('Desktop: ', this.plateform.is('desktop'));
    if ((this.plateform.is('mobile') && !this.plateform.is('hybrid')) || this.plateform.is('desktop')) {
      this.usePicker = true;
    }
  }

  onPickImage() {
    if (!Capacitor.isPluginAvailable('Camera')) {
      this.filePickerRef.nativeElement.click();
      return;
    }
    Plugins.Camera.getPhoto({
      quality: 60,
      source: CameraSource.Prompt,
      correctOrientation: true,
      width: 100,
      resultType: CameraResultType.Base64
    }).then(image => {
      this.selectedImage = image.base64Data;
      this.imagePick.emit(image.base64Data);
    }).catch(error => {
      console.log(error);
      if (this.usePicker) {
        this.filePickerRef.nativeElement.click();
      }
      return false;
    });
  }

  onFileChosen(event: Event) {
    console.log(event);
    const pickedFile = (event.target as HTMLInputElement).files[0];
    if (pickedFile) {
      console.log(pickedFile)
        let aspectRation: AspectRatioOptions;
        aspectRation = {keepAspectRatio: true}
        let options: NgxPicaResizeOptionsInterface;
        options = {aspectRatio: aspectRation};
        this._ngxPicaService.resizeImage(pickedFile, 1000, 1000, options)
            .subscribe((imageResized: File) => {
                const reader: FileReader = new FileReader();

                reader.onload = () => {
                  console.log(imageResized)
                  this.imagePick.emit(imageResized);
                  this.selectedImage = reader.result.toString();
                };

                reader.readAsDataURL(imageResized);

            }, (err: NgxPicaErrorInterface) => {
                throw err.err;
            });
        /* const dataUrl = fr.result.toString();
        const check = Jimp.read(dataUrl).then(image => {
         return image.resize(200, 200).getBase64Async(Jimp.MIME_JPEG).then(transformedImage => {
           console.log(transformedImage)
           console.log(dataUrl)
           this.imagePick.emit(transformedImage)
           this.selectedImage = transformedImage;
         })
        });
        console.log(check)
        this.selectedImage = dataUrl; */
        /* this.imagePick.emit(pickedFile); */
      }
  }

  /* onImagePicked(imageData: string | File) {
    let imageFile;
    if (typeof imageData === 'string') {
      try {
        const imageFile = base64toBlob(
          imageData.replace('data:image/jpeg;base64,', ''),
          'image/jpeg'
        );
      } catch (error) {
        console.log(error);
        return;
      }
    } else {
      imageFile = imageData;
    }

  } */

}
