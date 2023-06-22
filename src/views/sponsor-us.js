import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './sponsor-us.css'

const SponsorUs = (props) => {
  return (
    <div className="sponsor-us-container">
      <Helmet>
        <title>Sponsor-Us - The ÜberBots</title>
        <meta
          name="description"
          content="The official website of team 1124, the ÜberBots"
        />
        <meta property="og:title" content="Sponsor-Us - The ÜberBots" />
        <meta
          property="og:description"
          content="The official website of team 1124, the ÜberBots"
        />
      </Helmet>
      <div className="sponsor-us-banner">
        <h1 className="sponsor-us-text">Sponsor Us</h1>
        <Link to="/" className="sponsor-us-navlink button">
          Back
        </Link>
      </div>
      <span className="sponsor-us-text01">Why Sponsor?</span>
      <span className="sponsor-us-text02">
        <span>- Sponsorship money is tax deductible</span>
        <br></br>
        <span>- Advertisement (Shirts, banners, robots, website, etc.)</span>
        <br></br>
        <span>
          - Raise your profile with the next generation of engineers (internship
          opportunities)
        </span>
        <br></br>
        <span>
          - Employees who mentor us gain valuable experience and enhance their
          professional skills
        </span>
      </span>
      <div className="sponsor-us-container1">
        <Link to="/donate" className="sponsor-us-navlink1 button">
          Donate Money or Items
        </Link>
        <Link to="/mentor" className="sponsor-us-navlink2 button">
          Mentor Us
        </Link>
        <Link to="/contact-us" className="sponsor-us-navlink3 button">
          Contact us for other opportunities
        </Link>
      </div>
      <img
        src="/sponsor%20tiers%20image-800w.png"
        alt="image"
        className="sponsor-us-image"
      />
    </div>
  )
}

export default SponsorUs
