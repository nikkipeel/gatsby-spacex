import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
import '../../styles/tailwind.css'
import Seo from '../../components/seo'
import Loader from '../../components/loader'
import ScrollToTop from '../../components/scrollToTop'
import Footer from '../../components/footer'

const getPastLaunches = () => {
	return fetch('https://api.spacexdata.com/v5/launches/past?&sort=date_local&order=desc').then((res) => res.json())
}

const Launches = () => {
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

	Array.prototype.limit = limit

	const addMore = () => {
		// function that will make count show next 12 items
		setCount(count + 11)
	}

	return (
		<>
			<main className="h-full w-full bg-gray-900 text-white p-12">
				<Seo title="Launches" />
				<h1 className="mission-name tracking-wide font-bold text-2xl my-4 flex justify-center my-6 mx-auto">Launches</h1>

				<ul className="grid py-2 xl:grid-cols-3 md:grid-cols-2 lg:w-3/4 gap-2 mx-auto my-12">
					{launches
						.sort(function (a, b) {
							return b.flight_number - a.flight_number
						})
						.limit(count)
						.map((launch, id) => {
							const { flight_number, name, date_local, links, rocket, details } = launch

							return (
								<li className="max-w-sm flex h-full flex-col justify-start xl:p-2 overflow-hidden" key={id}>
									<div className="flex flex-col h-auto p-4 text-gray-100 shadow-lg bg-gray-700 bg-opacity-25 text-white leading-normal rounded">
										<div className="flex flex-row justify-between items-start space-x-8 pb-4">
											<h1 className="tracking-wide font-bold text-xl">{rocket.rocket_name}</h1>

											<strong className="flight-num tracking-wide text-xl">Flight # {flight_number}</strong>
										</div>

										<p>
											<strong>Mission: </strong>
											{name}
										</p>

										<p>
											<strong>Launch Date: </strong>
											{moment(date_local).format('dddd, MMMM Do YYYY, h:mm:ss a')}
										</p>

										<div className="flex justify-between items-center mt-4">
											<a
												href={links.wikipedia}
												className="flex font-bold font-mono bg-clip-text text-transparent bg-gradient-to-t from-blue-500 via-blue-400 to-blue-300 transition duration-500 ease-in-out hover:text-blue-300 hover:underline w-54"
											>
												Learn More
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="ml-2 h-6 w-6"
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
											{links.video_link && (
												<a
													href={links.video_link}
													className="font-bold font-mono bg-clip-text text-transparent bg-gradient-to-t from-blue-500 via-blue-400 to-blue-300 transition duration-500 ease-in-out hover:text-blue-300 hover:underline"
												>
													View Launch
												</a>
											)}
											{details && (
												<Link
													to={`/launches/${name}`}
													state={{
														name: name,
														flight_number: flight_number,
														date_local: date_local,
														links: links,
														rocket: rocket,
														details: details
													}}
													className="font-bold font-mono bg-clip-text text-transparent bg-gradient-to-t from-blue-500 via-blue-400 to-blue-300 transition duration-500 ease-in-out hover:text-blue-300 hover:underline w-48"
												>
													View Details
												</Link>
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
						className="px-4 py-2 font-mono bg-clip-text text-transparent bg-gradient-to-t from-blue-500 via-blue-400 to-blue-300 font-bold uppercase tracking-wide text-lg w-36 transition duration-500 ease-in-out hover:text-blue-300 border-2 border-transparent hover:border-blue-300 my-12 mx-auto focus:border-blue-300 transform hover:scale-105 flex justify-center"
					>
						Load More
					</button>
				) : (
					''
				)}
			</main>
			<ScrollToTop showBelow={250}></ScrollToTop>
			<Footer></Footer>
		</>
	)
}

export default Launches
