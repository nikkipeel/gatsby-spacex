import React, { useState, useEffect }  from 'react'
import moment from "moment"
import "../styles/tailwind.css"

const getSpaceXLaunchNext = () => {
  return fetch('https://api.spacexdata.com/v4/launches/next')
  .then((res) => res.json())
}

const NextLaunch = () => {
  const [launch, setLaunch] = useState(null)

  useEffect(() => {
    getSpaceXLaunchNext()
      .then(setLaunch)
  }, [])

  if (launch === null) {
    return <p>Loading next launch...</p>
  }

  return (
    <div className="flex flex-col justify-center items-center mx-auto w-50">
      <div className="flex flex-row items-end mt-12 mb-4 overflow-x-visible">
        <h1 className="text-white text-2xl font-mono font-bold border-b-8 border-blue-600 mr-2" style={{lineHeight: .45}}>Next Launch </h1>
        </div>
      <img src={launch.links.patch.small} alt={launch.name} style={{ maxWidth: '150px'}}/>
      <h2 className="text-xl font-bold">{launch.name}</h2>
      <strong>Flight Number {launch.flight_number}</strong>
      <p><strong>Launch Date: </strong>{moment(launch.date_local).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>

      <a className="font-bold bg-clip-text text-transparent bg-gradient-to-t from-blue-500 via-blue-400 to-blue-300 tracking-wide transition duration-500 ease-in-out hover:text-blue-300 hover:underline" href={launch.links.wikipedia}>More Info </a>
    </div>
  )
}

export default NextLaunch



