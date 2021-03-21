import React, {useState, useEffect}  from 'react'
import "../styles/tailwind.css"

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
      return <p>Loading rockets ...</p>
    }

        return (
            <>
            <div className="flex flex-row justify-center mx-auto mt-20 mb-4 overflow-visible">
                <h1 className="text-white text-2xl font-mono font-bold border-b-8 border-blue-600 mr-2" style={{lineHeight: .45}}>Rockets  </h1>
            </div>
        
            <ul className="grid p-2 lg:grid-cols-4 md:grid-cols-2 md:gap-2 overflow-x-hidden">
            {rockets.map(rocket => {
            const {rocket_name, mass, cost_per_launch, success_rate_pct, description, wikipedia} = rocket;
        
              return (
                <li className="max-w-sm h-full flex flex-auto flex-col p-2 rounded overflow-hidden shadow-lg bg-gray-700 bg-opacity-50 text-white">
                       <div className="flex flex-col p-4">
                        <h1 className="font-bold text-xl">{rocket_name}</h1>
                        <p><strong>Mass: </strong>{mass.kg} <em>kg</em> / {mass.lb} <em>lb</em> </p>
                        <p><strong>Cost per launch: </strong>${cost_per_launch}</p>
                        <p><strong>Success rate: </strong>{success_rate_pct}%</p>
                        <p className="text-sm py-2">{description}</p>
                        <a className="font-bold bg-clip-text text-transparent bg-gradient-to-t from-blue-600 via-blue-500 to-blue-400 tracking-wide transition duration-500 ease-in-out hover:text-blue-400 hover:underline" href={wikipedia}>More Info </a>   
                      
                    </div>

                      
                </li>
              );
            })}
</ul>
        </>
        
  )
}

export default Rockets

