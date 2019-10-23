import { Component, OnInit, Input} from '@angular/core';
import { PopoverController, MenuController } from '@ionic/angular';
import { SignupComponent } from '../../auth/signup/signup.component';
import { SigninComponent } from '../../auth/signin/signin.component';
import { AuthService } from 'src/app/auth/auth.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-auth-fab',
  templateUrl: './auth-fab.component.html',
  styleUrls: ['./auth-fab.component.scss'],
})
export class AuthFabComponent implements OnInit {

  isAuthenticatedAuhtComp = null;

  constructor(public popoverController: PopoverController,
              public authService: AuthService,
              private menu: MenuController
    ) {}

  ngOnInit() {
    this.authService.userIsAuthenticated.subscribe(res => {
      this.isAuthenticatedAuhtComp = res;
      console.log(this.isAuthenticatedAuhtComp)
    });
  }

/*   isAuthenticated() {
    this.authService.userIsAuthenticated.subscribe(res => {
      return res;
      console.log(this.isAuthenticatedAuhtComp)
    });
  } */

  async presentSignUpPopover() {
    const popover = await this.popoverController.create({
      component: SignupComponent,
      translucent: true,
      cssClass: 'pop-over-style'
    });
    return await popover.present();
  }

  async presentSignInPopover() {
    const popover = await this.popoverController.create({
      component: SigninComponent,
      translucent: true,
      cssClass: 'pop-over-style'
    });
    return await popover.present();
  }

  onLogOut() {
    this.authService.logOut();
  }

  openUserMenu() {
    this.menu.open('userMenu');
  }

}
