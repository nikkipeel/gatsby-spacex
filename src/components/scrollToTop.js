import React, { useState, useEffect } from 'react'

const ScrollToTop = ({ showBelow }) => {
	const [show, setShow] = useState(showBelow ? false : true)

	const handleScroll = () => {
		if (window.pageYOffset > showBelow) {
			if (!show) setShow(true)
		} else {
			if (show) setShow(false)
		}
	}

	const handleClick = () => {
		window[`scrollTo`]({ top: 0, behavior: `smooth` })
	}

	useEffect(() => {
		if (showBelow) {
			window.addEventListener(`scroll`, handleScroll)
			return () => window.removeEventListener(`scroll`, handleScroll)
		}
	})

	return (
		<>
			{show && (
				<button
					onClick={handleClick}
					className="overflow-x-none z-50 fixed bottom-32 lg:bottom-52 right-8 lg:right-16 text-blue-400 rounded-full h-8 w-8 hover:scale-105 hover:text-blue-300 transition duration-500 ease-in-out"
					aria-label="back to top"
				>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto bg-gray-800 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
					</svg>
				</button>
			)}
		</>
	)
}
export default ScrollToTop
