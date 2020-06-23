import { Component, OnInit, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { AlertController } from '@ionic/angular';
//import { CalendarComponent } from 'ionic2-calendar';
import { CalendarComponent } from 'ionic2-calendar';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})

export class CalendarPage implements OnInit {

  event = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    allDay: false
  };

  minDate = new Date().toISOString();

  eventSource = [
    // {
    //   title: "Test",
    //   desc: "ghghghgh",
    //   startTime: new Date(Date.UTC(2020, 6, 25)),
    //   endTime: new Date(Date.UTC(2020, 6, 26)),
    //   allDay: true
    // }
  ];

  viewTitle;

  calendar = {
    locale: 'es-ES',
    mode: 'month',
    currentDate: new Date(),
    formatMonthTitle: 'MMMM'
  };

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  loadEvents () {
    this.eventSource.push(
      {
        title: 'test',
        desc: 'test',
        startTime: new Date(2020, 5, 24),
        endTime: new Date(2020, 5, 26),
        allDay: false
      },
      {
        title: 'test2',
        desc: 'test',
        startTime: new Date(2020, 5, 28),
        endTime: new Date(2020, 5, 28),
        allDay: false
      },

    );
    //this.myCal.loadEvents();
    this.resetEvent();
}

  constructor(
    private alertCtrl: AlertController,
    @Inject(LOCALE_ID) private locale: string) {

  }

  ngOnInit() {
   
    //this.resetEvent();
    //this.fetchEvent();
    this.loadEvents();
  }

  resetEvent() {
    this.event = {
      title: '',
      desc: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay: false
    };
  }

  // fetchEvent() {
  //   console.log("fetchEvent");
  //   let jsonEvent = {
  //     title: "Test",
  //     startTime: new Date(2020, 5, 24),
  //     endTime: new Date(2020, 5, 26),
  //     allDay: true,
  //     desc: "ghghghgh",
  //   }
  //   console.log("jsonEvent", jsonEvent);
  //   if (jsonEvent.allDay) {
  //     let start = jsonEvent.startTime;
  //     let end = jsonEvent.endTime;

  //     jsonEvent.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
  //     jsonEvent.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
  //   }

  //   console.log("jsonEvent", jsonEvent);

  //   this.eventSource.push(jsonEvent);
  //   //this.myCal.loadEvents();
  //   this.resetEvent();
  // }

  addEvent() {
    console.log("addEvent");
    let eventCopy = {
      title: this.event.title,
      startTime: new Date(this.event.startTime),
      endTime: new Date(this.event.endTime),
      allDay: this.event.allDay,
      desc: this.event.desc
    }
    console.log("eventCopy", eventCopy);
    if (eventCopy.allDay) {
      let start = eventCopy.startTime;
      let end = eventCopy.endTime;

      eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
      eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
    }

    console.log("eventCopy", eventCopy);

    this.eventSource.push(eventCopy);
    this.myCal.loadEvents();
    this.resetEvent();
  }

  // Change current month/week/day
  next() {
    var swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slideNext();
  }

  back() {
    var swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slidePrev();
  }

  // Change between month/week/day
  changeMode(mode) {
    this.calendar.mode = mode;
  }

  // Focus today
  today() {
    this.calendar.currentDate = new Date();
  }

  // Selected date reange and hence title changed
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  // Calendar event was clicked
  async onEventSelected(event) {
    console.log("onEventSelected");
    // Use Angular date pipe for conversion
    let start = formatDate(event.startTime, 'medium', this.locale);
    let end = formatDate(event.endTime, 'medium', this.locale);

    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader: event.desc,
      message: 'From: ' + start + '<br><br>To: ' + end,
      buttons: ['OK']
    });
    alert.present();
  }

  // Time slot was clicked
  onTimeSelected(ev) {
    let selected = new Date(ev.selectedTime);
    this.event.startTime = selected.toISOString();
    selected.setHours(selected.getHours() + 1);
    this.event.endTime = (selected.toISOString());
  }

  onCurrentChanged = (ev: Date) => {
      console.log('Currently viewed date: ' + ev);
  };


}
