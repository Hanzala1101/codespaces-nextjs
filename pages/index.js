import React, { useEffect, useState } from 'react'
import Card from "/components/card";
import axios from "axios";
import air1 from '../assets/thermometer.png'
import air2 from "../assets/humidity.png" 
import air3 from "../assets/wind-sign.png"
import air4 from "../assets/idea.png" 
import air5 from "../assets/air.png" 

export default function index() {
  const [wData, setwData] = useState([])
  const [wData1, setwData1] = useState([])

  const url = "https://api.thingspeak.com/channels/2302325/feeds.json"
  const fetchdata = async () => await axios.get(url).then((res) => setwData(res.data.feeds[0]))
  const fetchdataAll = async () => await axios.get(url).then((res) => setwData1(res.data.feeds))
  useEffect(async () => {
    fetchdata();
    fetchdataAll();
  }, []);
  console.log(wData)
const image1=air1
const image2=air2
const image3=air3
const image4=air4
const image5=air5
  return (
    <>
      <div className='w-screen h-screen flex justify-center items-center mt-10' >
        <div className='md:w-[1024px] w-[384px] h-full'>
          <h1 className='font-bold text-3xl mb-5'>
            Weather Monitoring
          </h1>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <Card name="Temperature" value={(!wData.field1) ? 32 : wData.field1} image={image1}/>
            <Card name="Humidity" value={(!wData.field2) ? 50 : wData.field2} image={image2}/>
            <Card name="ATM Pressure (pa)" value={(!wData.field3) ? 1 : wData.field3} image={image3}/>
            <Card name="Light Intensity" value={(!wData.field4) ? 55 : wData.field4} image={image4}/>
            <Card name="Air Quality" value={(!wData.field5) ? 90 : wData.field5} image={image5}/>
          </div>
          <div className='flex overflow-x-scroll sm:w-[1024px] w-screen px-10 mt-10'>
              {wData1.slice(0,20).map(()=>{
                return(
                  <>
                  <Card name="Temperature" value={(!wData.field1) ? 32 : wData.field1} image={image1}/>
                  <Card name="Humidity" value={(!wData.field2) ? 50 : wData.field2} image={image2}/>
                  <Card name="ATM Pressure (pa)" value={(!wData.field3) ? 1 : wData.field3} image={image3}/>
                  <Card name="Light Intensity" value={(!wData.field4) ? 55 : wData.field4} image={image4}/>
                  <Card name="Air Quality" value={(!wData.field5) ? 90 : wData.field5} image={image5}/>
                  </>)

              })}
          </div>
        </div>
      </div>
    </>
  )
}
