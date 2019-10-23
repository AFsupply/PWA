import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { PopoverController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { take, tap, switchMap } from 'rxjs/operators';
import { of, from } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {

  signInForm: FormGroup;

  constructor(private authService: AuthService,
              private popoverController: PopoverController,
              private router: Router,
              private route: ActivatedRoute
  ) { }

  private initForm() {
      this.signInForm = new FormGroup ({
          email: new FormControl (null, {
            updateOn: 'blur',
            validators : [Validators.required]
           }),
          password: new FormControl (null, {
            updateOn: 'blur',
            validators : [Validators.required]
           }),
      });
    }

  ngOnInit() {

    this.initForm();
  }

  onSignIn() {
    const email = this.signInForm.value.email;
    const password = this.signInForm.value.password;
    this.authService.signIn(email, password)
    .subscribe();
    console.log(this.route);
  }
}
