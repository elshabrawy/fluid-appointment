import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { Appointment, AppointmentService } from '../appointment.service';
import { DatePipe } from '@angular/common';
@Component({
  standalone: true,
  selector: 'app-appointment-view',
  templateUrl: './appointment-view.component.html',
  styleUrls: ['./appointment-view.component.css'],
  providers: [DatePipe]
})
export default class AppointmentViewComponent implements OnInit {
  appointment: any;
  arrivalTime = '';
  date: string = '';
  time: string = '';
  constructor(
    private route: ActivatedRoute,
    private appointmentService: AppointmentService,
    private datePipe: DatePipe
  ) {
    console.log(this.appointment);
  }
  ngOnInit(): void {
    const url = new URL(document.location.href);
    const apptIdFromUrl = url.searchParams.get('apptId');

    if (apptIdFromUrl) {
      this.appointmentService
        .getAppointment(apptIdFromUrl)
        .subscribe((data) => {
          this.appointment = data.items[0];
          this.arrivalTime = data.items[0].arrivalTime;
          this.splitDateTime()
        });
    }

    // this.route.queryParams.subscribe((params) => {
    //   const apptId = params['apptId'];
    //   console.log(this.route);

    //   if (apptId) {
    //     this.appointmentService.getAppointment(apptId).subscribe((data) => {
    //       this.appointment = data.items;

    //     });
    //   }
    // });
  }

  splitDateTime() {
    const [datePart, timePart] = this.arrivalTime.split(' ');
    const [day, month, year] = datePart.split('-');
    const formattedDate = new Date(`${year}-${month}-${day}T${timePart}`);

    this.date = this.datePipe.transform(formattedDate, 'dd-MM-yyyy') || '';
    this.time = this.datePipe.transform(formattedDate, 'hh:mm a') || '';
  }
}
