import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

interface Day {
    name: string;
    date: string;
    current: boolean;
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {

  public weekDays: Day[];
  public date: moment.Moment = moment();

  constructor() {}

  public ngOnInit(): void {
      this.getWeek();
  }

  public getWeek(dir: number = 0): void {
    this.date.add(dir, 'week');

    const weekStart = this.date.clone().startOf('week');
    this.weekDays = [];

    for (let i = 0; i <= 6; i++) {
        const day: Day = {
            date: moment(weekStart).add(i, 'days').format('DD'),
            name: moment(weekStart).add(i, 'days').format('ddd'),
            current: moment().format('MMMM Do YYYY') ===
                moment(weekStart).add(i, 'days').format('MMMM Do YYYY')
        }
        this.weekDays.push(day);
    }
  }
}
