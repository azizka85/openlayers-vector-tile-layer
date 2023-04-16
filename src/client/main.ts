import Map from 'ol/Map'
import MVT from 'ol/format/MVT'
import VectorTileLayer from 'ol/layer/VectorTile'
import VectorTileSource from 'ol/source/VectorTile'
import View from 'ol/View'
import { fromLonLat } from 'ol/proj'

const map = new Map({
  target: 'map',
  layers: [
    new VectorTileLayer({
      source: new VectorTileSource({
        format: new MVT(),
        url:'https://vectortileservices3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Santa_Monica_Mountains_Parcels_VTL/VectorTileServer/tile/{z}/{y}/{x}.pbf',
        maxZoom: 14
      })
    })
  ],
  view: new View({
    center: fromLonLat([-118.805, 34.027]),
    zoom: 12
  })
})
