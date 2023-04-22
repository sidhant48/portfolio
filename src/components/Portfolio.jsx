import React from 'react'
import { Section } from './common/Section';

import { FaGithub,FaExternalLinkSquareAlt } from 'react-icons/fa';
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";


export const Portfolio = () => {

    const projects=[
        {
            id:1,
            image:p1,
            title:"Food App",
            github:"https://github.com/nodejs/node",
            demo:"https://nodejs.org/en/"
        },
        {
            id:2,
            image:p2,
            title:"Tracker App",
            github:"https://google.com",
            demo:"https://nodejs.org/en/"
        },
        {
            id:3,
            image:p3,
            title:"Statistics App",
            github:"https://apple.com",
            demo:"https://nodejs.org/en/"
        },{
            id:4,
            image:p4,
            title:"E-commerce App",
            github:"https://github.com/nodejs/node",
            demo:"https://nodejs.org/en/"
        },
        {
            id:5,
            image:p5,
            title:"Editor App",
            github:"https://github.com/nodejs/node",
            demo:"https://nodejs.org/en/"
        },
        {
            id:6,
            image:p6,
            title:"Design App",
            github:"https://github.com/nodejs/node",
            demo:"https://nodejs.org/en/"
        }
        
    ]

  return (
    <Section 
    title="Portfolio📟" 
    subtitle="These are all the projects that i have worked on.Some of them I have worked before I gained some experience.">
        <div className='grid gap-8 lg:gap-14 lg:grid-cols-2'>
            {projects.map(({id,image,title,github,demo})=>(
                <div key={id} className='max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden'>
                    <img src={image} alt={title} className="w-2/3"/>
                    <div className='w-1/3 flex flex-col items-center justify-evenly p-1'>
                        <h2>{title}</h2>
                        <a className='text-lg md:textxl lg:text-2xl cursor-pointer duration-150 hover:scale-110' href={github} target="_blank" rel="noopener noreferrer">
                            <FaGithub/>
                        </a>
                        <a className='text-lg md:textxl lg:text-2xl cursor-pointer duration-150 hover:scale-110' href={demo} target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkSquareAlt/>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </Section>
  )
}
