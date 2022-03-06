import React, {useState, useEffect}  from 'react'
import "../styles/tailwind.css"
import Loader from "../components/loader"

const getRockets = () => {
  return fetch('https://api.spacexdata.com/v3/rockets')
  .then((res) => res.json())
}

const Rockets = () => {
    const [rockets, setRockets] = useState(null)

    useEffect(() => {
      getRockets()
        .then(setRockets)
    }, [])
  
    if (rockets === null) {
      return <Loader></Loader>
    }

        return (
            <>
            <div className="flex flex-row justify-center mx-auto mt-20 mb-4 overflow-visible">
                <h1 className="text-white text-2xl font-mono font-bold border-b-8 border-blue-600 mr-2" style={{lineHeight: .45}}>Rockets  </h1>
            </div>
        
            <ul className="grid lg:grid-cols-3 md:grid-cols-2 gap-2 overflow-x-hidden mx-auto">
            {rockets.map((rocket, id) => {
            const {rocket_name, mass, cost_per_launch, success_rate_pct, description, wikipedia} = rocket;
        
              return (
                <li className="max-w-sm flex flex-col justify-start items-center p-2 my-4 mx-auto" key={id}>
                       <div className="flex flex-col p-4 rounded overflow-hidden shadow-lg bg-gray-700 bg-opacity-25 text-white leading-normal">
                        <h1 className="tracking-wide font-bold text-xl pb-4">{rocket_name}</h1>
                        <p><strong>Mass: </strong>{mass.kg} <em>kg</em> / {mass.lb} <em>lb</em> </p>
                        <p><strong>Cost per launch: </strong>${cost_per_launch}</p>
                        <p><strong>Success rate: </strong>{success_rate_pct}%</p>
                        <p className="text-base leading-relaxed py-4">{description}</p>
                        <div className="flex items-center external-links">
                          <a href={wikipedia} className="flex transition duration-500 ease-in-out hover:text-blue-300 w-54">
                          <p className="font-bold font-mono bg-clip-text text-transparent bg-gradient-to-t from-blue-500 via-blue-400 to-blue-300">Learn More</p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          </a>
                        </div>  
                    </div>

                      
                </li>
              );
            })}
</ul>
        </>
        
  )
}

export default Rockets

