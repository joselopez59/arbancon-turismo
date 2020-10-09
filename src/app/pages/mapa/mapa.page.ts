import { IvyParser } from '@angular/compiler';
import { Component } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from './../../services/mapa/marker.service';
// import * from "../../../assets/icon/"

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})

export class MapaPage {
  
  map: L.Map;

  //private pois;

  constructor( private markerService: MarkerService ) { }

  ionViewDidEnter() {
    
    this.initMap();
    //this.markerService.makePoisMarkers(this.map);
  }

  initMap() {

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

    // Ortofotos del Plan Nacional de Ortofotografía Aérea. Máxima actualidad
    const satelite = L.tileLayer.wms('http://www.ign.es/wms-inspire/pnoa-ma', {
      layers: 'OI.OrthoimageCoverage',
      format: 'image/png',
      transparent: false,
      continuousWorld : true,
      attribution: 'PNOA cedido por © <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geográfico Nacional de España</a>',
      maxZoom:25
    });

    this.map = new L.Map('mapId').setView([40.965, -3.115], 16);
    //this.map = new L.Map('mapId').setView([40.96404, -3.11249 ], 19);

    callejero.addTo(this.map);
    // topografico.addTo(this.map);
    L.control.scale({imperial:false}).addTo(this.map);

    const baseLayers  = {
      "Callejero": callejero,
      "Topográfico": topografico,
      "Satélite": satelite
    }
    
    const layerPoisTur = this.createLayer("poisturismos").addTo(this.map);
    const layerPois = this.createLayer("pois").addTo(this.map);
    
    
    const overlays = {
      "<span id='poiName'>Puntos de interés</span>": layerPois,
      "<span id='poiTurismoName'>Servicios turísticos</span>": layerPoisTur
    }
    
    const controlLayers = L.control.layers( baseLayers , overlays, { collapsed: false } );
    //this.map.removeLayer(layerPoisTur);

    controlLayers.addTo(this.map);
    
    this.map.on ({
      overlayadd: function(e) {
        console.log("overlayadd");
      }
    });

    const iconTest = L.icon({
      iconUrl: "../../../assets/icon/map/escudoArbancon.png",
      className: "mapicon mapiconPng"
    });

    const markerTest = L.marker(
      [
        40.966,
        -3.113823
      ],
      {icon: iconTest}
    ).addTo(this.map)
  }

  createLayer(layerName: string) {

    const layer = L.layerGroup();

    this.markerService.getPois(layerName)
    .subscribe((data: any) => {
      
      for (const poi of data) {

        const marker = L.marker(
          [
            poi.geometry.coordinates.lat, 
            poi.geometry.coordinates.lon
          ]
        );

        if (poi.properties.mapicon) {
          console.log("if", poi.properties.mapicon);
          const icon = L.icon({
            iconUrl: "../../../assets/icon/map/" + poi.properties.mapicon,
            className: "mapicon"
          });

          marker.setIcon(icon);
        }

        marker.bindPopup(this.makePopup(poi.properties.name));
        
        marker.addTo(layer);
      }

    });

    return layer;
  }

  makePopup(data: any): string {
    return "" + 
      "<div>" + data + "</div>"
  }

  ionViewWillLeave() {
    console.log("ionViewWillLeave");
    this.map.remove();
  }

}
