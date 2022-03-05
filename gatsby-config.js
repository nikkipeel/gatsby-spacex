module.exports = {
	siteMetadata: {
		title: `SpaceX Data`,
		description: `Information about rockets and upcoming launches from SpaceX`,
		author: `Nikki Peel`
	  },
	plugins: [
		'gatsby-plugin-postcss',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
			  name: `SpaceX Data`,
			  short_name: `spacex`,
			  description: `Information about rockets and upcoming launches from SpaceX`,
			  start_url: `/`,
			  background_color: `#1F2937`,
			  theme_color: `#3B82F6`,
			  icon: `src/images/rocket-icon.svg`, // This path is relative to the root of the site.
			},
		  },
	],
}
