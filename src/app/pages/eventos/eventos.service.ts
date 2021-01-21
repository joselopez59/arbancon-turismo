import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';
@Injectable({
  providedIn: 'root'
})

export class EventosService {

  env = environment;

  constructor( private http: HttpClient, private apollo: Apollo) { }

  getEventos() {
    console.log('getEventos');
    const eventosQuery: QueryRef<any> = this.apollo.watchQuery({
      query: gql`
        query {
          eventos {
            title
            descr
            start
          }
        }
      `
    });

    return eventosQuery;

    // eventosQuery.valueChanges.subscribe(result => {
    //   // this.eventos = result.data && result.data.eventos;
    //   console.log('getEventos result', result);
    // });
  }


  // getEventos() {
  //   return this.http.get(this.env.cmsURL + '/eventos/');
  // }
}
