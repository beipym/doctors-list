import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-doctor-reservation-card',
  templateUrl: './doctor-reservation-card.component.html',
  styleUrls: ['./doctor-reservation-card.component.scss']
})
export class DoctorReservationCardComponent {

  @Input() title = '';
  @Input() hours = '';
}
