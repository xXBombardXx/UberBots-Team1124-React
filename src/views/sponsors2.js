import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './sponsors2.css'

const Sponsors2 = (props) => {
  return (
    <div className="sponsors2-container">
      <Helmet>
        <title>Sponsors2 - The ÜberBots</title>
        <meta
          name="description"
          content="The official website of team 1124, the ÜberBots"
        />
        <meta property="og:title" content="Sponsors2 - The ÜberBots" />
        <meta
          property="og:description"
          content="The official website of team 1124, the ÜberBots"
        />
      </Helmet>
      <div className="sponsors2-banner">
        <h1 className="sponsors2-text">Sponsors</h1>
      </div>
      <div className="sponsors2-container1">
        <div className="sponsors2-container2">
          <span className="sponsors2-text01">Why Sponsor?</span>
          <span className="sponsors2-text02">
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
      <div className="sponsors2-container3">
        <Link to="/donate" className="sponsors2-navlink button">
          Donate Money or Items
        </Link>
        <Link to="/mentor" className="sponsors2-navlink1 button">
          Mentor Us
        </Link>
      </div>
      <h1 className="sponsors2-text10">Sponsor Levels</h1>
      <span className="sponsors2-text11">
        <span className="sponsors2-text12">BRONZE ($100 - $499)</span>
        <br className="sponsors2-text13"></br>
        <br></br>
        <span>- Thank you letter from team</span>
        <br></br>
        <span>- Company name (no logo) on website         </span>
        <br></br>
        <br></br>
      </span>
      <span className="sponsors2-text20">
        <span className="sponsors2-text21">SILVER ($500 - $999)</span>
        <br className="sponsors2-text22"></br>
        <br className="sponsors2-text23"></br>
        <span>
          - Everything from
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="sponsors2-text25">BRONZE</span>
        <br></br>
        <span>- Company name (no logo) on team t-shirts</span>
        <br></br>
        <span>- Company name and logo on website         </span>
        <br></br>
      </span>
      <span className="sponsors2-text31">
        <span className="sponsors2-text32">GOLD ($1000- $2499)</span>
        <br className="sponsors2-text33"></br>
        <br></br>
        <span>
          - Everything from
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="sponsors2-text36">SILVER</span>
        <br></br>
        <span>- Company name and logo on team t-shirts</span>
        <br></br>
        <br></br>
      </span>
      <span className="sponsors2-text41">
        <span className="sponsors2-text42">PLATINUM ($2500- $3999)</span>
        <br className="sponsors2-text43"></br>
        <br></br>
        <span>
          - Everything from
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="sponsors2-text46">GOLD</span>
        <br></br>
        <span>- Company name and logo on team banner</span>
        <br></br>
        <span>- Company name and logo on team flag </span>
        <br></br>
      </span>
      <span className="sponsors2-text52">
        <span className="sponsors2-text53">DIAMOND ($4000 and above) </span>
        <br className="sponsors2-text54"></br>
        <br></br>
        <span>
          - Everything from
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="sponsors2-text57">PLATINUM</span>
        <br></br>
        <span>- Company logo and name on robot             </span>
        <br></br>
        <span>- Company name announced before match</span>
        <br></br>
      </span>
    </div>
  )
}

export default Sponsors2
