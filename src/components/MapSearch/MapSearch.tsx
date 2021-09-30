import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} from 'react-google-maps';
//import withScriptjs from "react-google-maps/lib/async/withScriptjs";
import DrawingManager from 'react-google-maps/lib/components/drawing/DrawingManager';
import { SANDBOX_GOOGLE_API_KEY } from '../../Utils/constants/formsConstants';
import DrawBtn from './DrawBtn';
// We can use this function to get all the coordinates of a polygon or any other reactangle.

function getPaths(polygon: any) {
  var polygonBounds = polygon.getPath();
  var bounds = [];
  for (var i = 0; i < polygonBounds.length; i++) {
    var point = {
      lat: polygonBounds.getAt(i).lat(),
      lng: polygonBounds.getAt(i).lng()
    };
    bounds.push(point);
  }
  console.log(bounds);
}



const MapSearch = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=&callback=initMap&v=3.exp&libraries=drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)((props: any) => {
  const [draw, setDraw] = useState(false);
  return (
    <>
      <GoogleMap
        defaultZoom={8}
        defaultCenter={new window.google.maps.LatLng(-34.397, 150.644)}
        // onLoad={(map:any) => handleOnLoad(map)}
        // onTilesLoaded={(map:any) => handleOnLoad(map)}

      >
        <DrawingManager
          onPolygonComplete={(value) => console.log(getPaths(value))}
          drawingMode={
            draw ? google.maps.drawing.OverlayType.POLYGON : undefined
          }
          defaultOptions={{
            drawingControl: false,
            drawingControlOptions: {
              drawingModes: [window.google.maps.drawing.OverlayType.POLYGON]
            }
          }}
        />
        <DrawBtn draw={draw} setDraw={setDraw} position={google.maps.ControlPosition.BOTTOM_LEFT}/>
      </GoogleMap>
    </>
  );
});

export default MapSearch;
