import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';
import { faCodepen, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="h-full w-full bg-gray-900">
         <div className="flex flex-col lg:flex-row items-center bg-gray-700 bg-opacity-25 justify-between w-full h-full p-8">
        <div class="flex flex-col lg:flex-row items-start lg:items-center w-full text-left lg:gap-8">
        <StaticImage className="rounded-full h-20 w-20 drop-shadow-md shadow-inner" src="../images/selfie.jpg" alt="Portrait"  placeholder="blurred" loading="eager"/>
        <div className="flex flex-col w-auto max-w-full my-4 text-gray-100">
          <h2 className="text-2xl  tracking-wide flight-num font-bold py-1">Nikki Peel</h2>
          <em className="text-base my-1">Front End Developer</em>
          <a href="mailto:nikkipeel.dev@gmail.com" className="font-bold font-mono tracking-tight bg-clip-text text-transparent bg-gradient-to-t from-blue-500 via-blue-400 to-blue-300 text-base my-1 hover:underline hover:underline-offset-4 hover:text-blue-300  transition duration-500 ease-in-out">nikkipeel.dev@gmail.com</a>
        </div>
        </div>
            <div className="flex lg:justify-end w-full h-full my-4 overflow-hidden">
                <a aria-label="linked in" href="https://www.linkedin.com/in/nikkipeel" className="text-gray-100 pr-4 hover:scale-105"><FontAwesomeIcon className="w-6 h-6" icon={faLinkedin} /></a>
                <a aria-label="github"  href="https://www.github.com/nikkipeel" className="text-gray-100 pr-4 hover:scale-105"><FontAwesomeIcon className="w-6 h-6" icon={faGithub} /></a>
                <a aria-label="codepen" href="https://www.codepen.io/nikki-peel" className="text-gray-100 pr-4 hover:scale-105"><FontAwesomeIcon className="w-6 h-6" icon={faCodepen} /></a>
                <a aria-label="blog" href="https://nikkipeel.netlify.app" className="text-gray-100 pr-4 hover:scale-105"><FontAwesomeIcon className="w-6 h-6" icon={faExternalLinkAlt} /></a>
            </div>
            </div>
        </footer>
  )
  }


export default Footer