import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';


import { UsersRoutingModule } from './users-routing.module';
import { SignupComponent } from './signup/signup.component';
import { FixturesComponent } from './fixtures/fixtures.component';
import {CoreModule} from '../core/core.module';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [SignupComponent, FixturesComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  exports: [SignupComponent]
})
export class UsersModule { }
