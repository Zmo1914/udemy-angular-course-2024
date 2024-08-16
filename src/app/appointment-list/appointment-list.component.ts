import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {



  newAppointmentTitle: string = "";
  newAppointmentDate: Date = new Date;
  newAppointmentCounter = 0;

  appointments: Appointment[] = []

  ngOnInit(): void {
    console.log("got loaded");

    let savedAppointments = localStorage.getItem("appointments");
    let savedCounter = localStorage.getItem("counter");

    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [];
    this.newAppointmentCounter = savedCounter ? JSON.parse(savedCounter) : 0;
  }

  addAppointment() {
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }

      this.appointments.push(newAppointment)

      this.newAppointmentTitle = "";
      this.newAppointmentDate = new Date();
      this.newAppointmentCounter++;

      localStorage.setItem("appointments", JSON.stringify(this.appointments))
      localStorage.setItem("counter", JSON.stringify(this.newAppointmentCounter))

    }

  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
    this.newAppointmentCounter--;

    localStorage.setItem("appointments", JSON.stringify(this.appointments))
    localStorage.setItem("counter", JSON.stringify(this.newAppointmentCounter))
  }
}