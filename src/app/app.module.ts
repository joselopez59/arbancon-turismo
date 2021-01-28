import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { FullCalendarModule } from '@fullcalendar/angular';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { GraphQLModule } from './graphql.module';
import { ActividadesPageModule } from './pages/actividades/actividades.module';
import { AlojamientosPageModule } from './pages/alojamientos/alojamientos.module';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SuperTabsModule.forRoot(),
    HttpClientModule,
    FullCalendarModule,
    GraphQLModule,
    // ActividadesPageModule,
    // AlojamientosPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    InAppBrowser,
    { provide: LOCALE_ID, useValue: 'es-ES' }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
