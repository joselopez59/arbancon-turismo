import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})

export class CalendarPage implements OnInit {

  // dateRange: { from: string; to: string; };
  // type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  // optionsRange: CalendarComponentOptions = {
  //   pickMode: 'range'
  // };

  options: CalendarComponentOptions = {
    showToggleButtons: true,
    from: new Date(2000, 0, 1),
    pickMode: 'multi'
  };

  optionsMulti: CalendarComponentOptions = {
    from: new Date(2000, 0, 1),
    pickMode: 'range',
    daysConfig: [
      {
      date: new Date(2020, 5, 14),
      title: 'title',
      subTitle: 'subtitle',
      marked: true,
      },
      {
        date: new Date(2020, 5, 16),
        title: 'title',
        subTitle: 'subtitle',
        marked: true
        }

    ]
  };

  date: string[] = ['2020-06-28', '2020-06-30'];

  // dateRange: {
  //   from: string
  //   to: string
  // } = { from: '2018-06-28', to: '2018-06-29' };
  
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  

  constructor() {}

  ngOnInit(){}
}
