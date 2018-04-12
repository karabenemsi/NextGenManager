import { Component } from '@angular/core';

@Component({
  selector: 'ngm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngm';
  displayedColumns = ['dateTime', 'employee', 'logText', 'class'];
  dataSourceShort = LOG_DATA_SHORT;
  dataSource = LOG_DATA;
}

export interface LogData {
  dateTime: string;
  employee: string;
  logText: string;
  class: string;
}



const LOG_DATA_SHORT: LogData[] = [
  { dateTime: "05.06.2018 10:00", employee: "Laura Lohmüller", logText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.", class: "Information" },
  { dateTime: "05.06.2018 09:14", employee: "Tim Quarleiter", logText: "Aenean commodo ligula eget dolor.Aenean massa.", class: "Information" },
  { dateTime: "20.05.2018 13:15", employee: "Laura Lohmüller", logText: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", class: "Verzögerung" },
  { dateTime: "18.05.2018 09:43", employee: "Laura Lohmüller", logText: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Nulla consequat massa quis enim.", class: "Information" },
];
const LOG_DATA: LogData[] = [
  { dateTime: "05.06.2018 10:00", employee: "Laura Lohmüller", logText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.", class: "Information" },
  { dateTime: "05.06.2018 09:14", employee: "Tim Quarleiter", logText: "Aenean commodo ligula eget dolor.Aenean massa.", class: "Information" },
  { dateTime: "20.05.2018 13:15", employee: "Laura Lohmüller", logText: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", class: "Verzögerung" },
  { dateTime: "18.05.2018 09:43", employee: "Laura Lohmüller", logText: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Nulla consequat massa quis enim.", class: "Information" },
  { dateTime: "15.05.2018 08:12", employee: "Jonas Acker", logText: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.", class: "Kundengespräch" },
  { dateTime: "25.04.2018 15:25", employee: "Laura Lohmüller", logText: "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.", class: "Problem" },
  { dateTime: "13.04.2018 12:20", employee: "Tim Quarleiter", logText: "Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.", class: "Information" },{ dateTime: "05.06.2018 09:14", employee: "Tim Quarleiter", logText: "Aenean commodo ligula eget dolor.Aenean massa.", class: "Information" },
  { dateTime: "20.05.2018 13:15", employee: "Laura Lohmüller", logText: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", class: "Verzögerung" },
  { dateTime: "18.05.2018 09:43", employee: "Laura Lohmüller", logText: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Nulla consequat massa quis enim.", class: "Information" },
  { dateTime: "15.05.2018 08:12", employee: "Jonas Acker", logText: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.", class: "Kundengespräch" },
  { dateTime: "25.04.2018 15:25", employee: "Laura Lohmüller", logText: "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.", class: "Problem" },
  { dateTime: "13.04.2018 12:20", employee: "Tim Quarleiter", logText: "Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.", class: "Information" },{ dateTime: "05.06.2018 09:14", employee: "Tim Quarleiter", logText: "Aenean commodo ligula eget dolor.Aenean massa.", class: "Information" },
  { dateTime: "20.05.2018 13:15", employee: "Laura Lohmüller", logText: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", class: "Verzögerung" },
  { dateTime: "18.05.2018 09:43", employee: "Laura Lohmüller", logText: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Nulla consequat massa quis enim.", class: "Information" },
  { dateTime: "15.05.2018 08:12", employee: "Jonas Acker", logText: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.", class: "Kundengespräch" },
  { dateTime: "25.04.2018 15:25", employee: "Laura Lohmüller", logText: "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.", class: "Problem" },
  { dateTime: "13.04.2018 12:20", employee: "Tim Quarleiter", logText: "Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.", class: "Information" },{ dateTime: "05.06.2018 09:14", employee: "Tim Quarleiter", logText: "Aenean commodo ligula eget dolor.Aenean massa.", class: "Information" },
  { dateTime: "20.05.2018 13:15", employee: "Laura Lohmüller", logText: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", class: "Verzögerung" },
  { dateTime: "18.05.2018 09:43", employee: "Laura Lohmüller", logText: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Nulla consequat massa quis enim.", class: "Information" },
  { dateTime: "15.05.2018 08:12", employee: "Jonas Acker", logText: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.", class: "Kundengespräch" },
  { dateTime: "25.04.2018 15:25", employee: "Laura Lohmüller", logText: "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.", class: "Problem" },
  { dateTime: "13.04.2018 12:20", employee: "Tim Quarleiter", logText: "Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.", class: "Information" },{ dateTime: "05.06.2018 09:14", employee: "Tim Quarleiter", logText: "Aenean commodo ligula eget dolor.Aenean massa.", class: "Information" },
  { dateTime: "20.05.2018 13:15", employee: "Laura Lohmüller", logText: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", class: "Verzögerung" },
  { dateTime: "18.05.2018 09:43", employee: "Laura Lohmüller", logText: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Nulla consequat massa quis enim.", class: "Information" },
  { dateTime: "15.05.2018 08:12", employee: "Jonas Acker", logText: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.", class: "Kundengespräch" },
  { dateTime: "25.04.2018 15:25", employee: "Laura Lohmüller", logText: "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.", class: "Problem" },
  { dateTime: "13.04.2018 12:20", employee: "Tim Quarleiter", logText: "Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.", class: "Information" },
];
