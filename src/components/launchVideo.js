import React, { useState, useEffect }  from 'react'
import ReactPlayer from 'react-player';
import "../styles/tailwind.css"
import Loader from "../components/loader"

const getLatestLaunch = () => {
  return fetch('https://api.spacexdata.com/v5/launches/latest')
  .then((res) => res.json())
}

const LaunchVideo = () => {
  const [launch, setLaunch] = useState(null)

  useEffect(() => {
    getLatestLaunch()
      .then(setLaunch)
  }, [])

  if (launch === null) {
    return <Loader></Loader>
  }

  console.log({launch})
  return (
    <>
    {launch.links.youtube_id ?
    <div className="flex flex-col w-100 sm:w-3/4 xl:w-1/2  2xl:w-1/3 mx-auto">
          <div className="flex flex-row justify-center mx-auto mt-20 mb-4 overflow-visible">
                <h1 className="text-white text-2xl font-mono font-bold border-b-8 border-blue-600 mr-2" style={{lineHeight: .45}}>Latest Launch</h1>
            </div>
        <ReactPlayer 
        className="my-6 mx-auto" 
          url={"https://www.youtube.com/embed/" + launch.links.youtube_id + "?enablejsapi=1"}
          pip={true} 
          controls={true}
          width="100%"
        ></ReactPlayer>
        </div>
    
    : ''}
  </>
  )
}

export default LaunchVideo