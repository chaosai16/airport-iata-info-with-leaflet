import React, { useState } from 'react';
import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import { Icon } from 'leaflet';
import markerIcon from '../images/marker-icon.png';
import 'leaflet/dist/leaflet.css';
import '../App.css'
import '../components/Flight'
import { useEffect} from 'react';
import {GoLocation} from 'react-icons/go'

 export default function Maps() {
  const [lat,setLat]=useState('');
  const [lng,setLng]=useState('');
  const customIcon = new Icon({
    iconUrl: markerIcon,
    iconSize: [20, 20],
  })
  const position=[15.3994789,73.975753];

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
      console.log(`https://www.google.com/maps/@${position.coords.latitude},${position.coords.longitude},10.7z`)
    })
  })

  return (
    <section className='flex flex-col justify-center w-100% h-100%' >
      {/* --- (5) Add leaflet map container --- */}
      <div className='h-100% w-100% m-8 border-solid flex flex-row items-center justify-center'>
      <MapContainer center={position} icon={customIcon} zoom={9} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          // --- (7) Alternative map style (attribution and url copied from the leaflet extras website) ---
          // attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          // url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
          // --- -------------------------------------------------------------------------------------- ---
        />
        <Marker position={position} icon={customIcon} className=''>
          <Popup>
            Airport Here.. !!
          </Popup>
          
        </Marker>
      </MapContainer>
      {/* --- ---------------------------- --- */}
      </div>
    </section>
    
    
  );
}