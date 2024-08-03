import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
@Component({
standalone: true,
selector: 'app-appointment-view',
templateUrl: './appointment-view.component.html',
styleUrls: ['./appointment-view.component.css']
})
export default class AppointmentViewComponent implements OnInit{


patientName = 'FARAJ SABRI';
doctorName = 'Dr. RADI KURDI';
clinicNumber = 4;
appointmentDate = '28-04-2024';
appointmentTime = '08:40 AM';

constructor(private route: ActivatedRoute) {
}
ngOnInit(): void {
  const hamada = this.route.snapshot.queryParamMap.get('hamada');
  const RR = this.route.snapshot.queryParamMap.get('RR');
  console.log(hamada); // Output: ll
  console.log(RR);     // Output: kk
console.log(document.URL)
}
}
