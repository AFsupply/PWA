import { Component, OnInit, Input, Output } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService,
    ) {}

  signUpForm: FormGroup;

  private initForm() {
/*     let email = '';
    let password = ''; */

    this.signUpForm = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'password': new FormControl('', Validators.required)
  });
  }

  ngOnInit() {
    this.initForm();
  }

  onSignUp() {
    const email = this.signUpForm.value.email;
    const password = this.signUpForm.value.password;
    this.authService.signUp(email, password).subscribe();
  }

}
