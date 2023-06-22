import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import './achievements.css'

const Achievements = (props) => {
  return (
    <div className="achievements-container">
      <Helmet>
        <title>Achievements - The ÜberBots</title>
        <meta
          name="description"
          content="The official website of team 1124, the ÜberBots"
        />
        <meta property="og:title" content="Achievements - The ÜberBots" />
        <meta
          property="og:description"
          content="The official website of team 1124, the ÜberBots"
        />
      </Helmet>
      <div className="achievements-hero">
        <header data-role="Header" className="achievements-header">
          <div className="achievements-nav"></div>
          <h1 className="achievements-text">
            <span className="achievements-text01">Our Achievements</span>
            <br></br>
          </h1>
          <div className="achievements-btn-group"></div>
          <div data-role="MobileMenu" className="achievements-mobile-menu">
            <div className="achievements-nav1">
              <div className="achievements-container1">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="achievements-image"
                />
                <div
                  data-role="CloseMobileMenu"
                  className="achievements-menu-close"
                >
                  <svg viewBox="0 0 1024 1024" className="achievements-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks rootClassName="rootClassName16"></NavigationLinks>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="achievements-icon2"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="achievements-icon4"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="achievements-icon6"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <Link to="/" className="achievements-navlink button">
          Back
        </Link>
        <div className="achievements-container2">
          <span className="achievements-text03">
            <br></br>
            <span>
              -
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="achievements-text06">2003 (First Season)</span>
            <span>: Rookie All Star Award</span>
            <br></br>
            <br></br>
            <span>
              -
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="achievements-text11">2006:</span>
            <span> Regional Winner</span>
            <br></br>
            <br></br>
            <span>
              -
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="achievements-text16">2007:</span>
            <span>
              {' '}
              Regional Winner, Rockwell Automation in Control Award, Newton -
              Division Finalist
            </span>
            <br></br>
            <br></br>
            <span>
              -
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="achievements-text21">2008:</span>
            <span>
              {' '}
              Regional Winner, Kleiner Perkins Caufield &amp; Byers
              Entrepreneurship Award, Archimedes - Division Winner
            </span>
            <br></br>
            <br></br>
            <span>
              -
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="achievements-text26">2009:</span>
            <span> Rockwell Automation in Control Award</span>
            <br></br>
            <br></br>
            <span>
              -
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="achievements-text31">2010:</span>
            <span>
              {' '}
              Regional Chairman&apos;s Award, Engineering Excellence Award
              sponsored by Delphi
            </span>
            <br></br>
            <br></br>
            <span>
              -
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="achievements-text36">2010:</span>
            <span>
              {' '}
              Regional Winner, Coopertition Award, Innovation in Control Award
              sponsored by Rockwell Automation
            </span>
            <br></br>
            <br></br>
            <span>
              -
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="achievements-text41">2011:</span>
            <span> Website Award</span>
            <br></br>
            <br></br>
            <span>
              -
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="achievements-text46">
              2014:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>Judges Award. Hartford District Finalist</span>
            <br></br>
            <br></br>
            <span>
              -
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="achievements-text51">2015:</span>
            <span>
              {' '}
              Quality Award sponsored by Motorola, Team Spirit Award sponsored
              by Chrysler
            </span>
            <br></br>
            <br></br>
            <span>
              -
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="achievements-text56">2016:</span>
            <span>
              {' '}
              Innovation in Control Award sponsored by Rockwell Automation,
              Excellence in Engineering Award sponsored by Delphi
            </span>
            <br></br>
            <br></br>
            <span>
              -
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="achievements-text61">2017:</span>
            <span> Team Spirit Award sponsored by FCA Foundation</span>
            <br></br>
            <br></br>
            <span>- </span>
            <span className="achievements-text66">
              2023:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="achievements-text67">
              Semi-finalist dean&apos;s award winner
            </span>
            <br></br>
            <br></br>
          </span>
        </div>
        <img
          alt="image"
          src="/trophycasecropped-min-1500w.jpg"
          className="achievements-image1"
        />
      </div>
    </div>
  )
}

export default Achievements
