module.exports = {
	siteMetadata: {
		title: 'Gatsby Space'
	},
	plugins: [
		'gatsby-plugin-postcss',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
			  name: `SpaceX API Data`,
			  short_name: `spacex`,
			  description: `This webpage displays data about SpaceX rockets and launches`,
			  start_url: `/`,
			  background_color: `#663399`,
			  theme_color: `#3B82F6`,
			  icon: `src/images/rocket-gradient.svg`, // This path is relative to the root of the site.
			},
		  },
	],
}
