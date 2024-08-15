import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {
  animalTitle: string = 'z';

  animalList: string[] = ['Lion', 'Bear', 'Rabbit', 'Fox', 'Pig'];

  message = 'This is message in the AppointmentListComponent class.'

  private printText(s: string) {

    console.log('This method will print ' + s)

    return s;
  }

}
