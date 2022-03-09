import React from 'react'
import '../styles/tailwind.css'

const Loader = () => {
	return (
		<div class="spinner-box mx-auto">
			<div class="pulse-container">
				<div class="pulse-bubble pulse-bubble-1"></div>
				<div class="pulse-bubble pulse-bubble-2"></div>
				<div class="pulse-bubble pulse-bubble-3"></div>
			</div>
		</div>
	)
}

export default Loader
