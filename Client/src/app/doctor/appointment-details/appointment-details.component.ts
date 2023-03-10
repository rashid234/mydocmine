import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { DoctorService } from 'src/app/services/doctor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent {

  displayTime: any;
  patientId: number;
  appointmentId: number;
  patientDetails = {
    email: "",
    emergencyPhoneNumber: "",
    name: "",
    patientId: "",
    phoneNumber: "",
    userId: ""
  }

  appointmentDetails = {
    appointmentId: '',
    consultationId: '',
    date: '',
    diseases: '',
    elaboration: '',
    fromTime: '',
    medication: '',
    status: ''
  }

  constructor(private doctorService: DoctorService,
    private route: ActivatedRoute,
    private router: Router,
    private appointmentServe: AppointmentsService) {

  }
  ngOnInit() {
    this.patientId = parseInt(this.route.snapshot.params['patientId']);
    this.doctorService.patientDetailsAppointmentDetails(this.patientId).subscribe({
      next: (res: any) => {
        if (res.isValid) {
          this.patientDetails = res.result[0]
        }
      },
      error: (res: any) => {
        this.router.navigateByUrl('/error-page');
      }
    });

    this.appointmentId = parseInt(this.route.snapshot.params['appointmentId'])
    this.doctorService.consultationAppointmentDetails(this.appointmentId).subscribe({
      next: (res: any) => {
        if (res.isValid) {
          this.appointmentDetails = res.result[0]
          this.displayTime = this.appointmentServe.timeConvert(this.appointmentDetails.fromTime)
        }
      },
      error: (res: any) => {
        this.router.navigateByUrl('/error-page');
      }
    })
  }

  saveData() {
    this.doctorService.updateConsultationData(this.appointmentId, this.appointmentDetails).subscribe({
      next: (res: any) => {
        if (res.isValid) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Prescription added successfully',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigateByUrl('/doctor/home')
        }
        else {
          alert(res.errors[""]);
        }
      },
      error: (res: any) => {
        this.router.navigateByUrl('/error-page');
      }
    });
  }
}
