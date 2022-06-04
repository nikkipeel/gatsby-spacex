import React, { useState, useEffect } from 'react'
import '../styles/tailwind.css'
import Loader from '../components/loader'

const CompanyInfo = () => {
	return fetch('https://api.spacexdata.com/v4/company').then((res) => res.json())
}

const Info = () => {
	const [info, setInfo] = useState(null)

	useEffect(() => {
		CompanyInfo().then(setInfo)
	}, [])

	if (info === null) {
		return <Loader></Loader>
	}

	return (
		<div className="flex flex-col justify-center items-center mx-auto w-full md:w-1/2 xl:w-1/3 mb-8">
			<em className="text-md text-white text-center px-4">{info.summary} </em>
			<a
				href={info.links.website}
				className="external-link flex items-center mt-4 text-lg font-bold font-mono bg-clip-text text-transparent bg-gradient-to-t from-blue-500 via-blue-400 to-blue-300 transition duration-500 ease-in-out hover:text-blue-300 hover:underline"
			>
				Learn More
				<svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
					<path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
				</svg>
			</a>
		</div>
	)
}

export default Info
