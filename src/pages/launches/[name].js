import * as React from "react"
import moment from "moment"
import Seo from "../../components/seo"
import ScrollToTop from "../../components/scrollToTop"
import Footer from "../../components/footer"
import "../../styles/tailwind.css"

const Launch = ({ location, name}) => (
<>
  <main className="h-screen w-full bg-gray-900 text-white mx-auto">
    <Seo title={name} />
									{name && (
										<>
                    <div className="flex flex-col md:w-3/4 lg:w-1/2 p-12 mx-auto text-base" key={name}>
										<h1 className="mission-name tracking-wide font-bold text-2xl my-4">{name}</h1>
                  
                  <strong className="tracking-wide text-xl my-2">Flight # {location.state.flight_number}</strong>
                
                <div className="flex items-center my-2">
                  <strong className="text-xl mr-2">Mission: </strong><p className="text-base">{location.state.name}</p>
                </div>

                <div className="flex items-center my-2">   
                    <strong className="text-xl mr-2">Launch Date: </strong>
                    <p>{moment(location.state.date_local).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
                  </div>


                  {location.state.details &&
                  <p className="my-2">{location.state.details}</p>
                  }

<a href={location.state.links.wikipedia} className="my-2 font-bold font-mono bg-clip-text text-transparent bg-gradient-to-t from-blue-500 via-blue-400 to-blue-300 transition duration-500 ease-in-out hover:text-blue-300 hover:underline pr-8">Learn More</a>
            {location.state.links.video_link && 
              <a href={location.statelinks.video_link}  className="my-2 font-bold font-mono bg-clip-text text-transparent bg-gradient-to-t from-blue-500 via-blue-400 to-blue-300 transition duration-500 ease-in-out hover:text-blue-300 hover:underline p-2">View Launch</a>
            }
                  </div>
										</>
									)}
          
  </main>
  <ScrollToTop showBelow={250}></ScrollToTop>
  <Footer></Footer>
  </>
)
export default Launch
