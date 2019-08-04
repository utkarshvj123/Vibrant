import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder, private route: Router) { }
  submitted = false;
  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      date: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onSubmit() {
    console.log();
    console.log(this.myForm.value);

    if (this.myForm.value.password !== this.myForm.value.confirm_password ) {
      console.log('Error in password');
    } else {
      console.log('Password same');
      this.route.navigate(['/fixtures']);
    }
  }
}
