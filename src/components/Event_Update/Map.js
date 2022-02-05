import React from 'react';
import ReactMapGL,{Marker} from "react-map-gl";
import { useState } from 'react';
import locationmarker from "../../assets/locationmarker.png"
function EventLocation(props) {
    let [viewport, setViewport] = useState({
        width: 1000,
        height: 400,
        latitude: Number(props.latitude),
        longitude: Number(props.longitude),
        zoom: 15
      });
      console.log("viewport is", viewport);
      return (
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken="pk.eyJ1IjoidmlnaG5lc2gzODAyIiwiYSI6ImNreTZkZnJvNjBpZjUydm5vdWZhZHd1OGsifQ.tE3nwt6R4En89O2IxP2Ulw"
          onViewportChange={viewport => {
              setViewport(viewport)
          }}
        >
        <Marker latitude={viewport.latitude} longitude={viewport.longitude}>
            <img src={locationmarker} alt="" style={{height:'40px',width:'40px'}}/>
        </Marker>
        </ReactMapGL>
      );
  }
export default EventLocation