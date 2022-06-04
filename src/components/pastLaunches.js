import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

import moment from 'moment'
import '../styles/tailwind.css'
import Loader from '../components/loader'

const getPastLaunches = () => {
	return fetch('https://api.spacexdata.com/v5/launches/past?&sort=date_local&order=desc').then((res) => res.json())
}

const PastLaunches = () => {
	const [launches, setLaunches] = useState(null)
	const [count, setCount] = useState(11)

	useEffect(() => {
		getPastLaunches().then(setLaunches)
	}, [])

	if (launches === null) {
		return <Loader></Loader>
	}

	function limit(c) {
		return this.filter((x, i) => {
			if (i <= c - 1) {
				return true
			}
		})
	}
	//limit function,internally we have just used filter function and //used index of its callback function
	Array.prototype.limit = limit
	//add it to Array.prototype ,so that any array in JS,can invoke it

	const addMore = () => {
		// function that will make count show next 12 items
		setCount(count + 11)
	}

	return (
		<>
			<div className="flex flex-row justify-center items-end mx-auto mt-20 mb-4 overflow-x-visible">
				<h1 className="text-white text-2xl font-mono font-bold border-b-8 border-blue-600 mr-2" style={{ lineHeight: 0.45 }}>
					Recent Launches{' '}
				</h1>
				<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#ffffff">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
				</svg>
			</div>

			<ul className="grid py-2 lg:grid-cols-3 md:grid-cols-2 gap-2 mx-auto">
				{launches
					.sort(function (a, b) {
						return b.flight_number - a.flight_number
					})
					.limit(count)
					.map((launch, id) => {
						const { flight_number, name, date_local, links, rocket, details } = launch

						return (
							<li className="max-w-sm flex h-full flex-col justify-start p-2 overflow-hidden" key={id}>
								<div className="flex flex-col h-auto p-4 text-gray-100 shadow-lg bg-gray-700 bg-opacity-25 text-white leading-normal rounded">
									<div className="flex flex-row justify-between items-start space-x-8 pb-4">
										<h1 className="tracking-wide font-bold text-xl">{rocket.rocket_name}</h1>

										<strong className="flight-num tracking-wide text-xl">Flight # {flight_number}</strong>
									</div>

									<p className="text-lg">
										<strong>Mission: </strong>
										{name}
									</p>
									<p className="text-lg">
										<strong>Launch Date: </strong>
										{moment(date_local).format('dddd, MMMM Do YYYY, h:mm:ss a')}
									</p>

									{details && (
										<Link
											to={`/launches/${name}`}
											state={{
												name: name
											}}
											key={name}
											className="mt-4 font-bold font-mono bg-clip-text text-transparent bg-gradient-to-t from-blue-500 via-blue-400 to-blue-300 transition duration-500 ease-in-out hover:text-blue-300 hover:underline w-48 text-lg"
										>
											View Details
										</Link>
									)}
									<div className="flex justify-between items-center mt-2">
										<div className="flex items-center external-links">
											<a href={links.wikipedia} className="flex transition duration-500 ease-in-out hover:text-blue-300 w-54 text-lg">
												<p className="font-bold font-mono bg-clip-text text-transparent bg-gradient-to-t from-blue-500 via-blue-400 to-blue-300">
													Learn More
												</p>

												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="ml-2 h-6 w-6 text-blue-400"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
													strokeWidth={2}
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
													/>
												</svg>
											</a>
										</div>
										{links.webcast && (
											<div className="flex items-center external-links">
												<a
													href={links.webcast}
													className="flex items-center font-bold font-mono bg-clip-text text-transparent bg-gradient-to-t from-blue-500 via-blue-400 to-blue-300 transition duration-500 ease-in-out p-2 text-lg"
												>
													<p className="font-bold font-mono bg-clip-text text-transparent bg-gradient-to-t from-blue-500 via-blue-400 to-blue-300">
														Watch on{' '}
													</p>
													<FontAwesomeIcon aria-label="YouTube" className="h-6 w-6 ml-2 text-blue-400" icon={faYoutube} />
												</a>
											</div>
										)}
									</div>
								</div>
							</li>
						)
					})}
			</ul>

			{launches.length > count ? (
				<button
					onClick={addMore}
					aria-label="Load More"
					className="px-4 py-2 font-mono bg-clip-text text-transparent bg-gradient-to-t from-blue-500 via-blue-400 to-blue-300 font-bold uppercase tracking-wide text-lg w-36 transition duration-500 ease-in-out hover:text-blue-300 border-2 border-transparent hover:border-blue-300 my-12 mx-auto focus:border-blue-300 transform hover:scale-105 mb-48"
				>
					Load More
				</button>
			) : (
				''
			)}
		</>
	)
}

export default PastLaunches
