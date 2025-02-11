import React from 'react'
import {Link} from 'react-router-dom'
import {arrow} from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold">Sachin</span>👋
            <br />
             A SDE from India.
        </h1>
    ),

    2: (
        <InfoBox
        text="Worked with Physics Wallah and other companies and picked up many skills along the way."
        link="/about"
        btnText="Learn more"
        />
    ),

    3: (
        <InfoBox
        text="Led various projects at multiple Hackathons.Curios to know ?"
        link="/projects"
        btnText="Visit my Portfolio"
        />
    ),

    4: (
        <InfoBox
        text="Your perfect project or developer is just a few keystrokes away!"
        link="/contact"
        btnText="Let's connect"
        />
    ),
}


const HomeInfo = ({ currentStage }) => {

    return renderContent[currentStage] || null;
}

export default HomeInfo