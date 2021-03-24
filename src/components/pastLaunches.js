import React, { useState, useEffect }  from 'react'
import moment from "moment"
import "../styles/tailwind.css"

const getPastLaunches = () => {
  return fetch('https://api.spacexdata.com/v3/launches/past?limit=50&sort=flight_number&order=desc')
  .then((res) => res.json())
}

const PastLaunches = () => {
  const [launches, setLaunches] = useState(null)


  useEffect(() => {
    getPastLaunches()
      .then(setLaunches)
  }, [])

  if (launches === null) {
    return <p>Loading past launches...</p>
  }

  return (
    <>
    <div className="flex flex-row justify-center items-end mx-auto mt-20 mb-4 overflow-x-visible">
        <h1 className="text-white text-2xl font-mono font-bold border-b-8 border-blue-600 mr-2" style={{lineHeight: .45}}>Recent Launches  </h1>
				<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#ffffff">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 14l-7 7m0 0l-7-7m7 7V3"  />
        </svg>
    </div>


    <ul className="grid py-2 lg:grid-cols-3 md:grid-cols-2 md:gap-2 mx-auto">
    {launches.map((launch, id) => {
        const {flight_number, details, mission_name, launch_date_local, links, rocket, launch_site} = launch;

      return (
        <li className="max-w-sm max-h-100 flex flex-col p-2 rounded overflow-hidden shadow-lg bg-gray-700 bg-opacity-50 text-white" key={id}>
        <div className="flex flex-col h-full p-4 text-gray-100">
            <div className="flex flex-row justify-between items-start space-x-8 pb-4">
                <h1 className="tracking-wide font-bold text-xl">{rocket.rocket_name}</h1>
                  
              <strong className="flight-num tracking-wide text-xl">Flight # {flight_number}</strong>
              
            </div>
             
              <p><strong>Mission: </strong>{mission_name}</p>
              <p><strong>Location: </strong>{launch_site.site_name_long}</p>
               

              <p><strong>Launch Date: </strong>{moment(launch_date_local).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>

              {details
                ? <p className="text-sm pt-2">{details}</p>
          : <em className="text-sm pt-2">I'm sorry, no details are available for this launch</em>
            }
            
            <div className="flex items-center mt-4">
            <a href={links.wikipedia} className="font-bold font-mono bg-clip-text text-transparent bg-gradient-to-t from-blue-500 via-blue-400 to-blue-300 transition duration-500 ease-in-out hover:text-blue-300 hover:underline pr-8">Learn More</a>
            <a href={links.video_link}  className="font-bold font-mono bg-clip-text text-transparent bg-gradient-to-t from-blue-500 via-blue-400 to-blue-300 transition duration-500 ease-in-out hover:text-blue-300 hover:underline p-2">View Launch</a>
            </div>
      </div>
        </li>
      );
    })}

  </ul>
</>

  )
}

export default PastLaunches