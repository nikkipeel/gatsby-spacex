import React, { useState, useEffect }  from 'react'
import "../styles/tailwind.css"
import Loader from "../components/loader"

const CompanyInfo = () => {
  return fetch('https://api.spacexdata.com/v4/company')
  .then((res) => res.json())
}

const Info = () => {
  const [info, setInfo] = useState(null)

  useEffect(() => {
    CompanyInfo()
      .then(setInfo)
  }, [])

  if (info === null) {
    return <Loader></Loader>
  }

  return (
    <div className="flex flex-col justify-center items-center mx-auto w-full xl:w-1/3 mb-8">
        <em className="text-sm text-white text-center px-4">{info.summary} </em>
        <a href={info.links.website} className="font-bold font-mono bg-clip-text text-transparent bg-gradient-to-t from-blue-500 via-blue-400 to-blue-300 transition duration-500 ease-in-out hover:text-blue-300 hover:underline">Learn More</a>
     </div>
  )
}

export default Info
 


