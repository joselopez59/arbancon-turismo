import { Component } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from 'src/app/pages/actividades/marker.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})

export class MapaComponent {

  map: L.Map;

  private env = environment;

  constructor( private markerService: MarkerService ) { }

  ionViewDidEnter() {

    this.initMap();
    // this.markerService.makePoisMarkers(this.map);
  }

  initMap() {

    // const callejero = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={ accessToken }',
    // {
    //   attribution: 'Map data ©OpenStreetMap, Imagery ©Mapbox',
    //   maxZoom: 25,
    //   id: 'mapbox.streets',
    //   accessToken: 'pk.eyJ1Ijoiam9zZWxvcGV6IiwiYSI6ImNqdTJyenVqczBlYm4zeXFjaWJ5cmNjNXQifQ.GHte88RjI_B38NJc0df3dg'
    // });
    const callejero = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 25,
        id: 'mapbox.streets'
      }
    );

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
      maxZoom: 25
    });

    this.map = new L.Map('mapId').setView([40.965, -3.115], 16);
    // this.map = new L.Map('mapId').setView([40.96404, -3.11249 ], 19);

    callejero.addTo(this.map);
    // topografico.addTo(this.map);
    L.control.scale({imperial: false}).addTo(this.map);

    const baseLayers  = {
      Callejero: callejero,
      Topográfico: topografico,
      Satélite: satelite
    };

    const layerPois = this.createLayer('pois').addTo(this.map);
    const layerPoisTur = this.createLayer('poisturismos').addTo(this.map);

    const overlays = {
      '<span id="poiName">Puntos de interés</span>': layerPois,
      '<span id="poiTurismoName">Servicios turísticos</span>': layerPoisTur
    };

    const controlLayers = L.control.layers( baseLayers , overlays, { collapsed: false } );
    // this.map.removeLayer(layerPoisTur);

    controlLayers.addTo(this.map);

    // this.map.on ({
    //   overlayadd: () => {
    //     // console.log('overlayadd');
    //   }
    // });
  }

  createLayer(layerName: string) {

    const layer = L.layerGroup();

    this.markerService.getPois(layerName)
    .subscribe((data: any) => {
      // console.log(data);
      for (const poi of data) {

        const marker = L.marker(
          [
            poi.geometry.coordinates.lat,
            poi.geometry.coordinates.lon
          ]
        );

        if (poi.properties.iconMap) { // poi has icon
          // console.log(poi.properties.iconMap.url);
          const icon = L.icon({
            iconUrl: this.env.cmsURL + poi.properties.iconMap.url,
            className: 'mapicon'
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
    return '' +
      '<div>' + data + '</div>';
  }

  ionViewWillLeave() {
    // console.log('ionViewWillLeave');
    this.map.remove();
  }

}