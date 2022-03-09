import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Countdown from 'react-countdown'
import '../styles/tailwind.css'
import Loader from '../components/loader'

const getSpaceXLaunchNext = () => {
	return fetch('https://api.spacexdata.com/v4/launches/next').then((res) => res.json())
}

const NextLaunch = () => {
	const [launch, setLaunch] = useState(null)

	useEffect(() => {
		getSpaceXLaunchNext().then(setLaunch)
	}, [])

	if (launch === null) {
		return <Loader></Loader>
	}

	return (
		<div className="flex flex-col justify-center items-center mx-auto w-50">
			<div className="flex flex-row items-end mt-12 mb-4 overflow-x-visible">
				<h1 className="text-white text-2xl font-mono font-bold border-b-8 border-blue-600 mr-2" style={{ lineHeight: 0.45 }}>
					Next Launch{' '}
				</h1>
			</div>
			<img src={launch.links.patch.small} alt={launch.name} style={{ maxWidth: '150px' }} />
			<h1 className="text-xl font-bold tracking-wide">{launch.name}</h1>
			<strong>Flight Number {launch.flight_number}</strong>
			<p class="w-44 text-center">
				<strong>Launch Date: </strong>
				{moment(launch.date_local).format('dddd, MMMM Do YYYY, h:mm:ss a')}
			</p>

			<Countdown
				date={launch.date_local}
				className="text-3xl tracking-widest font-bold bg-clip-text text-transparent bg-gradient-to-t from-blue-600 via-blue-400 to-blue-200 transition duration-500 ease-in-out hover:text-blue-300 hover:underline pt-2 pb-4"
			/>
		</div>
	)
}

export default NextLaunch
