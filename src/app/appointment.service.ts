import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Appointment {
patientName: string;
doctorName: string;
clinicNumber: number;
appointmentDate: string;
appointmentTime: string;
}

@Injectable({
providedIn: 'root'
})
export class AppointmentService {
private apiUrl = 'http://3.139.135.28:8080/ords/fluid/appt/getAppt?apptId=12734&langId=EN';

constructor(private http: HttpClient) { }

  getAppointment(appointmentId: string): Observable<Appointment> {
    let params = new HttpParams().set('id', appointmentId);
    return this.http.get<Appointment>(this.apiUrl, { params });
  }
}
