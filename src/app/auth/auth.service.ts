import { Injectable, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject, from } from 'rxjs';
import { User } from './user.model';
import { map, take, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Plugins } from '@capacitor/core';

interface AuthFirebaseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;

}


@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  
  private activeLogOutTimer: any;
  authMode = 'firebase';
  private _user = new BehaviorSubject<User>(null);

  get userIsAuthenticated() {
    return this._user.asObservable().pipe(
      map(user => {
        if (user) {
          console.log('dans la mauvaise boucle')
          return !!user.token;
        } else {
          console.log('dans la bonne bouble')
         return false;
        }
      }));
  }

  get userId() {
    return this._user.asObservable().pipe(map(user => {
      if (user) {
        return user.id;
      } else {
        return null;
      }
    }));
  }

  get token() {
    return this._user.asObservable().pipe(map(user => {
      if (user) {
        return user.token;
      } else {
        return null;
      }
    }));
  }

  private setUserData(userData: AuthFirebaseData) {
    const expirationTime = new Date(new Date().getTime() + +userData.expiresIn * 1000);
    console.log(expirationTime)
    const user = new User(
        userData.localId,
        userData.email,
        userData.idToken,
        expirationTime
    );
    this._user.next(user);
    this.autoLogOut(user.tokenDuration);
    this.storeAuthData(
      userData.localId,
      userData.idToken,
      expirationTime.toISOString(),
      userData.email
    );
  }

  private storeAuthData(userId: string, token: string, tokenExpirationDate: string, email: string) {
    const data = JSON.stringify({userId: userId, token: token, tokenExpirationDate: tokenExpirationDate, email: email});
    Plugins.Storage.set({key: 'authData', value: data});
  }

  private autoLogOut(duration: number) {
    if (this.activeLogOutTimer) {
      clearTimeout(this.activeLogOutTimer);
    }
    this.activeLogOutTimer = setTimeout(() => {
      this.logOut();
    }, duration);
  }

  constructor(private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient
  ) { }

  autoLogin() {
    return from(Plugins.Storage.get({key: 'authData'})).pipe(map( storageData => {
      if (!storageData || !storageData.value) {
        console.log('no data storage');
        return null;
      }
      const parsedData = JSON.parse(storageData.value) as {
        token: string,
        tokenExpirationDate: string,
        userId: string,
        email: string
      };
      const expirationTime = new Date(parsedData.tokenExpirationDate);
      if (expirationTime <= new Date()) {
        return null;
      }
      const user = new User(
        parsedData.userId,
        parsedData.email,
        parsedData.token,
        expirationTime
      );
      return user;
    }),
    tap(user => {
      if (user) {
        this._user.next(user);
        this.autoLogOut(user.tokenDuration);
      }
    }),
    map (user => {
      return !!user;
    }));
  }

  signIn(email: string, password: string) {
    if (this.authMode === 'firebase') {
      return this.http
      .post<AuthFirebaseData>(
        `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${
          environment.firebaseConfig.apiKey
        }`,
        { email: email, password: password, returnSecureToken: true }
      )
      .pipe(tap((this.setUserData.bind(this))
        /* (userData) => {
        console.log(userData);
        this.setUserData.bind(userData);
        this.router.navigateByUrl('life-board')
      } */
      ));
    }
  }

  signUp(email: string, password: string) {
    if (this.authMode === 'firebase') {
      return this.http.post<AuthFirebaseData>(
        `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${environment.firebaseConfig.apiKey}`,
        { email: email, password: password, returnSecureToken: true}
        ).pipe(tap((this.setUserData.bind(this))));
    }
  }

  isAuthenticated() {
    this.userIsAuthenticated.pipe(take(1), tap(authenticated => {
      if (authenticated) {
        return true;
      } else {
        return false;
      }
    }));
  }

  logOut() {
    if (this.activeLogOutTimer) {
      clearTimeout(this.activeLogOutTimer);
    }
    if (this.authMode === 'firebase') {
      this._user.next(null);
      console.log(this._user);
      Plugins.Storage.remove({key: 'authData'});
      this.router.navigate(['/']);
    }
  }

  ngOnDestroy(): void {
    if (this.activeLogOutTimer) {
      clearTimeout(this.activeLogOutTimer);
    }
  }

 /*  getToken() {
    if (this.authMode === 'firebase') {
      firebase.auth().currentUser.getIdToken()
        .then(
          (token: string) => this.token = token
        );
      return this.token;
    }
  } */

}
