module.exports = {
	siteMetadata: {
		title: `SpaceX Data`,
		description: `Information about rockets and upcoming launches from SpaceX`,
		author: `Nikki Peel`
	},
	plugins: [
		'gatsby-plugin-postcss',
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				// You can add multiple tracking ids and a pageview event will be fired for all of them.
				trackingIds: [
					'G-CMNES9RS9V' // Google Analytics / GA
					// "AW-CONVERSION_ID", // Google Ads / Adwords / AW
					// "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
				]
				// This object gets passed directly to the gtag config command
				// This config will be shared across all trackingIds
				//   gtagConfig: {
				// 	optimize_id: "OPT_CONTAINER_ID",
				// 	anonymize_ip: true,
				// 	cookie_expires: 0,
				//   },
				// This object is used for configuration specific to this plugin
				//   pluginConfig: {
				// 	// Puts tracking script in the head instead of the body
				// 	head: false,
				// 	// Setting this parameter is also optional
				// 	respectDNT: true,
				// 	// Avoids sending pageview hits from custom paths
				// 	exclude: ["/preview/**", "/do-not-track/me/too/"],
				// 	// Defaults to https://www.googletagmanager.com
				// 	origin: "YOUR_SELF_HOSTED_ORIGIN",
				//   },
			}
		},
		`gatsby-plugin-netlify`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `SpaceX Data`,
				short_name: `spacex`,
				description: `Information about rockets and upcoming launches from SpaceX`,
				start_url: `/`,
				background_color: `#1F2937`,
				theme_color: `#3B82F6`,
				icon: `src/images/rocket-icon.svg` // This path is relative to the root of the site.
			}
		}
	]
}
