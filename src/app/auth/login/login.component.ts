import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  
  hide = true;

  matcher = new MyErrorStateMatcher();

  loginForm: any;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailFormControl : new FormControl('', [Validators.required, Validators.email]),
      passwordFormControl : new FormControl('', [Validators.required]),
    });

  }

  onClickLogin(){
    // if(this.loginForm.invalid){
    //   return
    // }
    console.log('form value: ', this.loginForm.value);
    this.router.navigate(['/home']);
  }
}
