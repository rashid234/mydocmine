import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { NavbarPatientComponent } from './navbar-patient/navbar-patient.component';
import { PatientLayoutComponent } from './patient-layout/patient-layout.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppointmentBookingComponent } from './appointment-booking/appointment-booking.component';
import { AppointmentHistoryComponent } from './appointment-history/appointment-history.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarPatientComponent,
    PatientLayoutComponent,
    AppointmentBookingComponent,
    AppointmentHistoryComponent,
    PatientProfileComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    RouterModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class PatientModule { }
