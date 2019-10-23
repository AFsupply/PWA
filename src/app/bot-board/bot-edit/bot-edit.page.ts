import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Plugins, Capacitor } from '@capacitor/core';
import { Bot, Use, SlaveBot } from '../bot.model';
import { AlertController } from '@ionic/angular';
import { BotService } from '../bot.service';
import { switchMap, tap, take, map } from 'rxjs/operators';
import { AuthService } from '../../auth/auth.service';

const { Geolocation } = Plugins;

function base64toBlob(base64Data: any, contentType: any) {
  contentType = contentType || '';
  const sliceSize = 1024;
  const byteCharacters = atob(base64Data);
  const bytesLength = byteCharacters.length;
  const slicesCount = Math.ceil(bytesLength / sliceSize);
  const byteArrays = new Array(slicesCount);

  for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
      const begin = sliceIndex * sliceSize;
      const end = Math.min(begin + sliceSize, bytesLength);

      const bytes = new Array(end - begin);
      for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
          bytes[i] = byteCharacters[offset].charCodeAt(0);
      }
      byteArrays[sliceIndex] = new Uint8Array(bytes);
  }
  return new Blob(byteArrays, { type: contentType });
}

@Component({
  selector: 'app-bot-edit',
  templateUrl: './bot-edit.page.html',
  styleUrls: ['./bot-edit.page.scss'],
})
export class BotEditPage implements OnInit {

  @Input() bot: Bot;
  botForm: FormGroup;
  latitude: number;
  longitude: number;

  constructor(private formBuilder: FormBuilder,
              public alertCtrl: AlertController,
              private botService: BotService,
              private authService: AuthService) {}

  private initForm() {

      this.botForm = this.formBuilder.group({
          name: new FormControl (null, {
            updateOn: 'blur',
            validators : [Validators.required]
           }),
          image: new FormControl(null, {
            updateOn: 'blur',
            validators: [Validators.required]
          }),
          webAdress: new FormControl (null, {
            validators : [Validators.required]
           }),
          locationLat: new FormControl (null, {
            updateOn: 'blur',
            validators : [Validators.required]
           }),
          locationLng: new FormControl (null, {
            updateOn: 'blur',
            validators : [Validators.required]
           }),
          description: new FormControl (null, {
            updateOn: 'blur',
            validators : [Validators.required]
          }),
          adress: new FormControl (null, {
            updateOn: 'blur',
            validators : []
          }),
          uses: this.formBuilder.array([
            this.uses
          ]),
          slaveBots: this.formBuilder.array([
            /* this.slaveBots */
          ])
      });
    }

  ngOnInit() {
    this.initForm();
  }

  onNewBot() {
    console.log(this.botForm.value);
    console.log(this.bot);
    if (this.bot === undefined) {
      let userId: string;
      this.authService.userId.pipe(take(1), tap( id => {
        userId = id;
      })).subscribe();
      this.bot = new Bot(
        '',
        userId,
        this.botForm.get('name').value,
        this.botForm.get('image').value,
        this.botForm.get('webAdress').value,
        {
          'lat': this.botForm.get('locationLng').value,
          'lng' : this.botForm.get('locationLat').value,
        },
        this.botForm.get('description').value,
        [],
        this.botForm.get('adress').value,
        []
      );
      const use = this.botForm.get('uses').value;
      for (const _i in use) {
        if (_i) {
          const pushedUse = new Use(
          use.name,
          use.description,
          []
          );
          this.bot.uses.push(pushedUse);
          const useArguments = ((this.botForm.get('uses') as FormArray).at(Number(_i)).get('arguments') as FormArray).value;
          for (const _ii in useArguments) {
            if (_ii) {
              this.bot.uses[_i].argument.push(useArguments[_ii].name);
            }
          }
        }
      }
      const slaveBots = this.botForm.get('slaveBots').value;
      for (const _i in  slaveBots) {
        if (_i) {
          const pushedSlaveBot = new SlaveBot(
          slaveBots[_i].name,
          slaveBots[_i].image,
          slaveBots[_i].webAdress,
          slaveBots[_i].description,
          []
          );
          this.bot.slaveBots.push(pushedSlaveBot);
          const slaveBotUses = ((this.botForm.get('slaveBots') as FormArray).at(Number(_i)).get('slaveBotUses') as FormArray).value;
          for (const _ii in slaveBotUses) {
            if (_ii) {
             const pushedUse = new Use(
              slaveBotUses[_ii].name,
              slaveBotUses[_ii].description,
              []
              );
              this.bot.slaveBots[_i].uses.push(pushedUse);
              const slaveBotUseArguments = (((this.botForm.get('slaveBots') as FormArray)
                                            .at(Number(_i)).get('slaveBotUses') as FormArray)
                                              .at(Number(_ii)).get('slaveBotUseArguments') as FormArray).value;
              for (const _iii in slaveBotUseArguments) {
                if (_iii) {
                  this.bot.slaveBots[_i].uses[_ii].argument.push(slaveBotUseArguments[_iii].name);
                }
              }
            }
          }
        }
      }
    }
    /* this.botService.uploadImage(this.botForm.get('image').value).pipe(tap(uploadRes => {
      this.bot.image = uploadRes.imageUrl;
      console.log(this.bot.image);
      console.log(uploadRes.imageUrl);
    })).subscribe(); */
    this.authService.userId.pipe(take(1), switchMap(userId => {
      if (!userId) {
        throw new Error('No user id');
      }
      this.bot.userId = userId;
      return this.botService.storeBot(this.bot);
    })).subscribe();
  }

  get uses(): FormGroup {
    return this.formBuilder.group({
      name: this.formBuilder.control('', {
        updateOn: 'blur',
        validators : [Validators.required]
      }),
      description: this.formBuilder.control('', {
        updateOn: 'blur',
        validators : [Validators.required]
      }),
      arguments: this.formBuilder.array([
        this.arguments
      ])
      /* argument: this.formBuilder.control('', {
        updateOn: 'blur',
        validators : [Validators.required]
      }), */
  });
  }

  get arguments(): FormGroup {
    return this.formBuilder.group({
      name : this.formBuilder.control('', {
      updateOn: 'blur',
      validators: []
      })
    });
  }

  get slaveBots(): FormGroup {
    return this.formBuilder.group({
      name: this.formBuilder.control('', {
        updateOn: 'blur',
        validators : [Validators.required]
      }),
      image: this.formBuilder.control('', {
        updateOn: 'blur',
        validators: []
      }),
      webAdress: this.formBuilder.control('', {
        validators : [Validators.required]
      }),
      description: this.formBuilder.control('', {
        updateOn: 'blur',
        validators : [Validators.required]
      }),
      slaveBotUses: this.formBuilder.array([
        /* this.initSlaveBotUses() */
      ]),
    });
  }

  get slaveBotUses(): FormGroup {
    return this.formBuilder.group({
      name: this.formBuilder.control('', {
        updateOn: 'blur',
        validators : [Validators.required]
      }),
      description: this.formBuilder.control('', {
        updateOn: 'blur',
        validators : [Validators.required]
      }),
      slaveBotUseArguments: this.formBuilder.array([
        this.slaveBotUseArguments
      ])
      /* argument: this.formBuilder.control('', {
        updateOn: 'blur',
        validators : [Validators.required]
      }), */
    });
  }

  get slaveBotUseArguments(): FormGroup {
    return this.formBuilder.group({
      name: this.formBuilder.control('', {
        updateOn: 'blur',
        validators : []
      }),
    });
  }


/*   initSlaveBotUses() {
    return this.formBuilder.group({
      name: this.formBuilder.control('', {
        updateOn: 'blur',
        validators : [Validators.required]
      }),
      description: this.formBuilder.control('', {
        updateOn: 'blur',
        validators : [Validators.required]
      }),
      argument: this.formBuilder.control('', {
        updateOn: 'blur',
        validators : [Validators.required]
      }),
  });
  } */

  onAddUse() {
    (this.botForm.get('uses') as FormArray).push(this.uses);
  }

  onAddArgument(i: number) {
    ((this.botForm.get('uses') as FormArray).at(i).get('arguments') as FormArray).push(this.arguments);
  }

  onAddSlaveBot() {
    (this.botForm.get('slaveBots') as FormArray).push(this.slaveBots);
  }

  onAddSlaveBotUse(i: number) {
    ((this.botForm.get('slaveBots') as FormArray).at(i).get('slaveBotUses') as FormArray).push(this.slaveBotUses);
  }

  onAddSlaveBotUseArgument(iSB: number, iSBU: number) {
    (((this.botForm.get('slaveBots') as FormArray)
      .at(iSB).get('slaveBotUses') as FormArray).at(iSBU).get('slaveBotUseArguments') as FormArray).push(this.slaveBotUseArguments);
  }

  onAskUse(url: string) {
     this.botService.getBotUses(url);
  }

  onDeleteUse(index: number) {
    (<FormArray>this.botForm.get('uses')).removeAt(index);
  }

  onDeleteArgumentUse(iU: number, iUA: number) {
    const control = (<FormArray>this.botForm.controls['uses']).at(iU).get('arguments') as FormArray;
    console.log(control);
    control.removeAt(iUA);
  }

  onDeleteSlaveBot(index: number) {
    (<FormArray>this.botForm.get('slaveBots')).removeAt(index);
  }

  onDeleteSlaveBotUse(iSB: number, iSBU: number) {
    console.log(iSB, iSBU);
    const control = (<FormArray>this.botForm.controls['slaveBots']).at(iSB).get('slaveBotUses') as FormArray;
    console.log(control);
    control.removeAt(iSBU);
  }

  onDeleteSlaveBotUseArgument(iSB: number, iSBU: number, iSBUA: number) {
    console.log(iSB, iSBU, iSBUA);
    const control = ((<FormArray>this.botForm.controls['slaveBots']).at(iSB).get('slaveBotUses') as FormArray).at(iSBU) as FormArray;
    console.log(control);
    control.removeAt(iSBUA);
  }

  getUsesControls() {
    return (<FormArray>this.botForm.get('uses')).controls;
  }

  getUseArgumentsControls(i: number) {
    return ((<FormArray>this.botForm.controls['uses']).at(i).get('arguments') as FormArray).controls;
  }

  getSlaveBotsControls() {
    return (<FormArray>this.botForm.get('slaveBots')).controls;
  }

  getSlaveBotUsesControls(i: number) {
    return ((<FormArray>this.botForm.controls['slaveBots']).at(i).get('slaveBotUses') as FormArray).controls;
  }

  getSlaveBotUseArgumentsControls(iSB: number, iSBU: number) {
    return (((<FormArray>this.botForm.controls['slaveBots']).at(iSB) as FormArray)
    .controls['slaveBotUses'].at(iSBU).get('slaveBotUseArguments') as FormArray).controls;
  }

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.botForm.get('locationLat').setValue(coordinates.coords.latitude);
    this.botForm.get('locationLng').setValue(coordinates.coords.longitude);
    console.log(this.botForm);
  }

  onGetLocation() {
    if (!Capacitor.isPluginAvailable) {
      return;
    }
    this.getCurrentPosition();
  }

  onImagePicked(imageData: string | File, formCtrl: string) {
    console.log('djhfdiughdiughdiughdihgidhgihg');
    let imageFile;
    if (typeof imageData === 'string') {
      try {
        imageFile = base64toBlob(
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
    if (formCtrl === '') {
      this.botForm.patchValue({ image: imageFile});
    } else {
      (this.botForm.get('slaveBots') as FormArray).at(Number(formCtrl)).patchValue({ image : imageFile});
    }
    console.log(this.botForm);
  }

  uploadImage(image: File, iSB?: number) {
    if (iSB !== undefined) {
      this.botService.uploadImage(image).pipe(tap(uploadRes => {
        console.log('dans isb');
        console.log('');
        (this.botForm.get('slaveBots') as FormArray).at(Number(iSB)).patchValue(uploadRes.imageUrl);
        console.log(uploadRes.imageUrl);
      })).subscribe();
    } else {
      this.botService.uploadImage(image).pipe(tap(uploadRes => {
      this.botForm.get('image').patchValue(uploadRes.imageUrl);
      console.log(uploadRes.imageUrl);
    })).subscribe();
    }
  }

  askBotUses(webAdress: string, slaveBotWebAdress?: string, iSB?: number) {
    this.botService.askBotUses(webAdress, slaveBotWebAdress).pipe(map(uses => {
      if (slaveBotWebAdress) {
        for (const use in uses) {
          if (use) {
            console.log(uses[Number(use)].name);
            ((this.botForm.get('slaveBots') as FormArray)
              .at(iSB).get('slaveBotUses') as FormArray)
                .at(Number(use)).get('name').patchValue(uses[Number(use)].name);
          }
        }
        
      }
    }))
  }
}
