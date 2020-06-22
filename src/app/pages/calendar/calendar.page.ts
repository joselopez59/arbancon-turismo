import { Component, OnInit} from '@angular/core';
import { CalendarComponentOptions, DayConfig } from 'ion2-calendar'


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  date: string;
  type: string;

  _daysConfig: DayConfig[] = [];
    
  
  constructor() {
    this.date = "";
    this.type = "";

    // for (let i = 0; i < 31; i++) {
    //   this._daysConfig.push({
    //     date: new Date(2020, 5, i + 1),
    //     title: 'est',
    //     subTitle: `test`,
        
    //   })
    // }
    
  }

  ngOnInit() {}

  options: CalendarComponentOptions = {
    monthFormat: 'MMMM YYYY',
    weekdays: ['D', 'L', 'M', 'Mi', 'J', 'V', 'S'],
    weekStart: 1,
    showToggleButtons: true,
    daysConfig: this._daysConfig
  };

  onChange(event) {
    console.log("onChange ", event);
  }

  onSelect(event) {
    console.log("onSelect", event);
  }
  

}
