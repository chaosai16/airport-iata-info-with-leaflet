import React from 'react'
import { useState, useEffect } from "react";
function Flight() {

  const [myData, setMyData] = useState({});
  const [isError, setIsError] = useState("");
  const [iata,setLoc]=useState('');
  

  useEffect(() => {
    fetch(`https://airport-info.p.rapidapi.com/airport?iata=${iata}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "ce19d0164fmsh3d383efc0e85ce5p16dcb1jsnb1a4a3c79541",
        "x-rapidapi-host": "airport-info.p.rapidapi.com"
      }
    })
      .then(response => response.json())
      .then(data => {
        
        setMyData(data);
      })
      .catch(error => {
        setIsError(error.message);
      });
      
  }, [iata]);

  useEffect(() => {
    console.log(myData);
  }, [myData]);

  return (
    <div className='py-4'>
      {isError !== "" && <h2 className="bg-red-700">{isError}</h2>}
      <div className=''>
      <input type='text' className='flex items-center max-w-md mx-auto shadow rounded border-0 p-2 w-96 bg-blue-50' value={iata} placeholder='Search IATA code' onChange={e =>setLoc(e.target.value)}/>
      {/* <button type="submit" className='flex border-solid px-2' value="Submit">Submit</button> */}
      </div>
      <>
      {typeof myData === "object" && Object.keys(myData).length > 0 && (
        <div className=''>
        <p className="text-center">{myData.name}</p>
        <p className="text-center">{myData.location}</p>
        <p className="text-center">{myData.street_number}</p>
        <p className="text-center">{myData.street}</p>
        <p className="text-center">{myData.city}</p>
        <p className="text-center">{myData.county}</p>
        <p className="text-center">{myData.state}</p>
        <p className="text-center">{myData.country_iso}</p>
        <p className="text-center">{myData.country}</p>
        <p className="text-center">{myData.postal_code}</p>
        <p className="text-center">{myData.phone}</p>
        <p className="text-center">{myData.latitude}</p>
        <p className="text-center">{myData.longitude}</p>
        <p className="text-center">{myData.uct}</p>
        <p className="text-center">{myData.website}</p>
        </div>

      )}
      </>
      
    </div>
  )
}

export default Flight
