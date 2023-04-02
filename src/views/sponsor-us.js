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
        <h1 className="sponsor-us-text">Sponsors</h1>
      </div>
      <div className="sponsor-us-container1">
        <div className="sponsor-us-container2">
          <span className="sponsor-us-text01">Why Sponsor?</span>
          <span className="sponsor-us-text02">
            <span>- Sponsorship money is tax deductible</span>
            <br></br>
            <span>
              - Advertisement (Shirts, banners, robots, website, etc.)
            </span>
            <br></br>
            <span>
              - Raise your profile with the next generation of engineers
              (internship opportunities)
            </span>
            <br></br>
            <span>
              - Employees who mentor us gain valuable experience and enhance
              their professional skills
            </span>
          </span>
        </div>
      </div>
      <div className="sponsor-us-container3">
        <Link to="/donate" className="sponsor-us-navlink button">
          Donate Money or Items
        </Link>
        <Link to="/mentor" className="sponsor-us-navlink1 button">
          Mentor Us
        </Link>
      </div>
      <h1 className="sponsor-us-text10">Sponsor Levels</h1>
      <span className="sponsor-us-text11">
        <span className="sponsor-us-text12">BRONZE ($100 - $499)</span>
        <br className="sponsor-us-text13"></br>
        <br></br>
        <span>- Thank you letter from team</span>
        <br></br>
        <span>- Company name (no logo) on website         </span>
        <br></br>
        <br></br>
      </span>
      <span className="sponsor-us-text20">
        <span className="sponsor-us-text21">SILVER ($500 - $999)</span>
        <br className="sponsor-us-text22"></br>
        <br className="sponsor-us-text23"></br>
        <span>
          - Everything from
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="sponsor-us-text25">BRONZE</span>
        <br></br>
        <span>- Company name (no logo) on team t-shirts</span>
        <br></br>
        <span>- Company name and logo on website         </span>
        <br></br>
      </span>
      <span className="sponsor-us-text31">
        <span className="sponsor-us-text32">GOLD ($1000- $2499)</span>
        <br className="sponsor-us-text33"></br>
        <br></br>
        <span>
          - Everything from
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="sponsor-us-text36">SILVER</span>
        <br></br>
        <span>- Company name and logo on team t-shirts</span>
        <br></br>
        <br></br>
      </span>
      <span className="sponsor-us-text41">
        <span className="sponsor-us-text42">PLATINUM ($2500- $3999)</span>
        <br className="sponsor-us-text43"></br>
        <br></br>
        <span>
          - Everything from
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="sponsor-us-text46">GOLD</span>
        <br></br>
        <span>- Company name and logo on team banner</span>
        <br></br>
        <span>- Company name and logo on team flag </span>
        <br></br>
      </span>
      <span className="sponsor-us-text52">
        <span className="sponsor-us-text53">DIAMOND ($4000 and above) </span>
        <br className="sponsor-us-text54"></br>
        <br></br>
        <span>
          - Everything from
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="sponsor-us-text57">PLATINUM</span>
        <br></br>
        <span>- Company logo and name on robot             </span>
        <br></br>
        <span>- Company name announced before match</span>
        <br></br>
      </span>
    </div>
  )
}

export default SponsorUs
