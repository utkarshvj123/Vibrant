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
  notMatched: boolean;
  ngOnInit() {
    this.notMatched = false;
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
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
      this.notMatched = true;
    } else {
      console.log('Password same');
      this.route.navigate(['/fixtures']);
    }
  }
}
