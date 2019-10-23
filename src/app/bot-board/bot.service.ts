import { Injectable } from '@angular/core';
import { Bot, Use, SlaveBot } from './bot.model';
import { BehaviorSubject, throwError, Observable } from 'rxjs';
import { take, map, tap, catchError, switchMap } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';
import { DataStorageService } from '../db/data-storage.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';


interface BotFirebaseData {
  description: string;
  location: {lat: number, lng: number};
  name: string;
  image: string;
  uses: Use[];
  webAdress: string;
  slaveBots?: SlaveBot[];
  adress?: string;
}

@Injectable({
  providedIn: 'root'
})
export class BotService {

  private bots = new BehaviorSubject<Bot[]> ([
    new Bot(
      '1',
      '',
      'Autonom Food Supply 1',
      'https://www.mon-orange-pi.chezmoi',
      'bfghghgh',
      {'lat': '43.31', 'lng': '-0.35'},
      'Trasnport bridge on right line and level',
      [ new Use(
          'CheckBots',
          'CheckBots'
          ),
        new Use(
          'SendSowTask',
          'Envoie une tâche à un robot esclave',
          ['Type de légume', 'emplacement de dépot', 'adresse IP du robot chargé de la mission']
        )
      ],
      '3 rue charles louis',
      [ new SlaveBot(
        'GardenerBot',
        'fefrgrgrg',
        '192.168.1.17',
        'Partie mobile de AFS',
        [ new Use('Sow', 'Vas cherchez un pot et le depose à l' + "'" + 'emplacement indiqué', ['légume à semer'])]
        )]
      )
  ]);

  private storageMode = 'firebase';

/* 
  get Vegetables() {
    return this.vegetables.asObservable();
} */

  constructor(public alertCtrl: AlertController,
              private dbService: DataStorageService,
              private http: HttpClient,
              private authService: AuthService
    //private vegetable: Vegetable
    ) { }

 /*  setVegetables(vegetables: Vegetable[]) {
      console.log(vegetables);
      this.vegetables = vegetables;
      this.vegetablesChanged.next(this.vegetables.slice());
  }
 */


  getBots() {
      return this.bots.asObservable();
  }

  getBot(id: string) {
      console.log(id);
      return this.bots.pipe(take(1), map(bots => {
         return {...bots.find (b => b.id === id)};
      }));
  }

  addBot(bot: Bot) {
    this.authService.token.pipe(take(1), switchMap( token => {
      if (this.storageMode === 'firebase' ) {
      return this.http.put(`https://autonomfoodsupply.firebaseio.com/bots.json?auth=${token}`, {...bot, id: null })
        .pipe(tap( resData => {
        console.log(resData);
      }));
    }
    }));
    /* this.bots.pipe(take(1)).subscribe((bots: Bot[]) => {
        this.bots.next(bots.concat(bot));
      }); */
    }

  updateBot(id: number, newBot: Bot) {
      this.bots[id] = newBot;
  }

  getBotUses(url: string) {
    /* return this.http.get<Use[]>(url + '/functions')
      .pipe(
        catchError (this.handleError), map(
        (uses) => {
          if (uses === null || uses === undefined) {
            const alert = this.alertCtrl.create({
              header: 'Erreur 01',
              message: 'gfergegerg',
              buttons: [
                {
                  text: 'Cancel',
                  role: 'cancel',
                  cssClass: 'secondary',
                  handler: () => {
                    console.log('Confirm Cancel');
                  }
                }, {
                  text: 'Ok',
                  handler: () => {
                    console.log('Confirm Ok');
                  }
                }
              ]
            });
             return console.log('coucou');
          }
          for (let use of uses){
            
          }
          return console.log('coucou');
        }
      )
      ); */
  }

  getStoredBots() {
    return this.authService.token.pipe(take(1), switchMap( token => {
      console.log('coucou');
      if (this.storageMode === 'firebase') {
        console.log(token)
        return this.http.get<{[key: string]: BotFirebaseData}>(`https://autonomfoodsupply.firebaseio.com/bots.json?auth=${token}`)
        .pipe(map(
          (loadedBot) => {
            const bots = [];
            for (const key in loadedBot) {
              if (loadedBot.hasOwnProperty(key)) {
                let userId: string;
                this.authService.userId.subscribe(res => {
                  userId = res;
                });
                console.log(userId);
                const bot = new Bot(
                key,
                userId || null,
                loadedBot[key].name,
                loadedBot[key].image,
                loadedBot[key].webAdress,
                {
                  'lat': loadedBot[key].location.lat.toString(),
                  'lng' : loadedBot[key].location.lng.toString(),
                },
                loadedBot[key].description,
                [],
                loadedBot[key].adress,
                []
                );
                for (const use of loadedBot[key].uses) {
                  const pushedUse = new Use(
                    use.name,
                    use.description,
                    use.argument
                  );
                  bot.uses.push(pushedUse);
                }
                const slaveBots = loadedBot[key].slaveBots;
                for (const _i in  slaveBots) {
                  if (_i) {
                    const pushedSlaveBot = new SlaveBot(
                    slaveBots[_i].name,
                    slaveBots[_i].image,
                    slaveBots[_i].webAdress,
                    slaveBots[_i].description,
                    []
                    );
                    bot.slaveBots.push(pushedSlaveBot);
                    const slaveBotUses = loadedBot[key].slaveBots[_i].uses;
                    for (const _ii in slaveBotUses) {
                      if (_ii) {
                        const pushedUse = new Use(
                        slaveBotUses[_ii].name,
                        slaveBotUses[_ii].description,
                        slaveBotUses[_ii].argument
                        );
                        bot.slaveBots[_i].uses.push(pushedUse);
                      }
                    }
                  }
                }
                bots.push(bot);
              }
            }
            return bots;
          }
        ), catchError(error => {
          return throwError('Something went wrong', error);
        }),
        tap(bots => {
          this.bots.next(bots);
        }));
      }
    }));
  }

  storeBot(bot: Bot) {
    return this.authService.token.pipe(take(1), switchMap( token => {
      if (this.storageMode === 'firebase' ) {
      return this.http.post<{name: string}>(
        `https://autonomfoodsupply.firebaseio.com/bots.json?auth=${token}`,
        {...bot, id: null })
          .pipe(tap( resData => {
        console.log(resData);
      }));
    }
    }));
  }

  uploadImage(image: File) {
    console.log(image)
    const uploadData = new FormData();
    uploadData.append('image', image);

    return this.http.post<{imageUrl: string, imagePath: string}>(
      'https://us-central1-autonomfoodsupply.cloudfunctions.net/storeImage',
      uploadData
    );
  }

  askBotUses(webAdress: string, slaveBotWebAdress?: string) {
    return this.http.get<Use>(`${webAdress}` + '/' + `${slaveBotWebAdress}`);
  }

}
