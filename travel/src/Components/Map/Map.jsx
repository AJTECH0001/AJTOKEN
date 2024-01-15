import React from 'react'
import GoogleMapReact from 'google-map-react';


const Map = () => {
  const classes = useStyles();
  
  return (
    <div>
      <GoogleMapReact className={classes.mapContainer} >
        bootStrapURLKeys={{ key: 'AIzaSyBFunsUmQ7N12nT29zMLRFg_srd0dtHSUo'}}
      </GoogleMapReact>
    </div>
  )
}

export default Map
