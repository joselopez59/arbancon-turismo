import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage {

  icon = {
    icon: L.icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 0 ],
      // specify the path here
      iconUrl: '/marker-icon.png',
      shadowUrl: '/marker-shadow.png'
   })
  };

  map: L.Map;

  constructor() { }

  ionViewDidEnter() {
    this.leafletMap();
  }

  leafletMap() {

    const callejero = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={ accessToken }',
    {
      attribution: 'Map data ©OpenStreetMap, Imagery ©Mapbox',
      maxZoom: 25,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1Ijoiam9zZWxvcGV6IiwiYSI6ImNqdTJyenVqczBlYm4zeXFjaWJ5cmNjNXQifQ.GHte88RjI_B38NJc0df3dg'
    });

    // Cartografía raster del Instituto Geográfico Nacional.
    const topografico = L.tileLayer.wms('http://www.ign.es/wms-inspire/mapa-raster', {
      layers: 'mtn_rasterizado',
      format: 'image/png',
      transparent: false,
      continuousWorld : true,
      attribution: '©Instituto Geográfico Nacional', 
      maxZoom: 20
    });

    this.map = new L.Map('mapId').setView([40.965, -3.115], 16);

    // this.createLayer().addTo(this.map);
    

    const marker = L.marker([40.96404, -3.11249], this.icon ).addTo(this.map);

    callejero.addTo(this.map);
    // topografico.addTo(this.map);
    L.control.scale({imperial:false}).addTo(this.map);

    const baselayers = {
      "Callejero": callejero,
      "Topográfico": topografico
    }

    const overlayers = {
      "<span id='poiName'>Puntos de interés</span>": "",
    }

    const controlLayers = L.control.layers( baselayers, "", { collapsed: false } );
    controlLayers.addTo(this.map);

  }

  createLayer() {

    // const icon = {
    //   icon: L.icon({
    //     iconSize: [ 25, 41 ],
    //     iconAnchor: [ 13, 0 ],
    //     // specify the path here
    //     iconUrl: '/node_modules/leaflet/dist/images/marker-icon.png',
    //     shadowUrl: '../../../../node_modules/leaflet/dist/images/marker-shadow.png'
    //  })
    // };

    // const marker = L.marker(
    //   [40.96404, -3.11249],
    //   icon
    // );

    // return marker;
  }

  ionViewWillLeave() {
    this.map.remove();
  }

}
