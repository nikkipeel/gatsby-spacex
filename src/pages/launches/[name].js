import * as React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
import '../../styles/tailwind.css'
import Seo from '../../components/seo'
import ScrollToTop from '../../components/scrollToTop'
import Footer from '../../components/footer'
import Loader from '../../components/loader'

const LaunchPage = ({ serverData, location, launchName }) => {
	return (
		<>
			{serverData ? (
				<>
					<main className="h-screen w-full bg-gray-900 text-white mx-auto">
						{serverData.map((launch) => {
							const { name, flight_number, details, links, date_local } = launch

							return (
								<>
									{location.state.name === name && (
										<>
											<Seo title={name} />
											<Link
												to="/"
												className="flex items-center py-8 px-4 lg:py-12 lg:px-24 md:w-3/4 mx-auto font-mono text-lg transition ease-in-out duration-500 hover:underline hover:underline-offset-4 hover:text-blue-300"
											>
												<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-4" viewBox="0 0 20 20" fill="currentColor">
													<path
														fillRule="evenodd"
														d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
														clipRule="evenodd"
													/>
												</svg>
												back home
											</Link>
											<div className="flex flex-col md:w-3/4 lg:w-1/2 pt-0 pb-12 px-12 mx-auto text-base" name={launchName} key={name}>
												<h1 className="mission-name tracking-wider font-bold text-3xl my-4">{name}</h1>

												<strong className="tracking-wide text-2xl my-2">Flight # {flight_number}</strong>

												<div className="flex items-center h-16 mt-2">
													<strong className="text-2xl mr-2">Mission: </strong>
													<p className="text-xl">{name}</p>
												</div>

												<div className="flex items-center h-20">
													<strong className="text-2xl mr-2">Launch Date: </strong>
													<p className="text-xl">{moment(date_local).format('dddd, MMMM Do YYYY, h:mm:ss a')}</p>
												</div>

												{details && <p className="my-4 leading-8 text-lg">{details}</p>}

												<a href={links.wikipedia} className="external-link flex items-center mt-4 mb-2 transition duration-500 ease-in-out">
													<p className="font-bold text-xl font-mono bg-clip-text text-transparent bg-gradient-to-t from-blue-500 via-blue-400 to-blue-300 transition duration-500 ease-in-out hover:text-blue-300 hover:underline">
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
												{links.video_link && (
													<a
														href={links.video_link}
														className="my-2 font-bold font-mono bg-clip-text text-transparent bg-gradient-to-t from-blue-500 via-blue-400 to-blue-300 transition duration-500 ease-in-out hover:text-blue-300 hover:underline p-2"
													>
														View Launch
													</a>
												)}
											</div>
										</>
									)}
								</>
							)
						})}
					</main>
					<ScrollToTop showBelow={250}></ScrollToTop>
					<Footer></Footer>
				</>
			) : (
				<main className="h-screen w-full bg-gray-900 text-white mx-auto">
					<Loader></Loader>
				</main>
			)}
		</>
	)
}
export default LaunchPage

export async function getServerData() {
	try {
		const res = await fetch(`https://api.spacexdata.com/v5/launches/past`)
		if (!res.ok) {
			throw new Error(`Response failed`)
		}
		return {
			props: await res.json()
		}
	} catch (error) {
		return {
			status: 500,
			headers: {},
			props: {}
		}
	}
}
