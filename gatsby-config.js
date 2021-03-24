module.exports = {
	siteMetadata: {
		title: 'Gatsby Space'
	},
	plugins: ['gatsby-plugin-postcss'],
	proxy: [
		{
		  prefix: "/api",
		  url: "https://api.spacexdata.com/v4/launches/next",
		},
		{
		  prefix: "/api2",
		  url: "https://api.spacexdata.com/v3/launches/past?limit=50&sort=flight_number&order=desc",
		},
		{
			prefix: "/api3",
			url: "https://api.spacexdata.com/v3/launches/rockets",
		  },
	  ],
}
