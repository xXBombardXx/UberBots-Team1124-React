import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import './sponsors.css'

const Sponsors = (props) => {
  return (
    <div className="sponsors-container">
      <Helmet>
        <title>Sponsors - The ÜberBots</title>
        <meta
          name="description"
          content="The official website of team 1124, the ÜberBots"
        />
        <meta property="og:title" content="Sponsors - The ÜberBots" />
        <meta
          property="og:description"
          content="The official website of team 1124, the ÜberBots"
        />
      </Helmet>
      <div className="sponsors-hero">
        <header data-role="Header" className="sponsors-header">
          <div className="sponsors-nav"></div>
          <h1 className="sponsors-text">
            <span className="sponsors-text001">Sponsor Us</span>
            <br></br>
          </h1>
          <div className="sponsors-btn-group"></div>
          <div data-role="BurgerMenu" className="sponsors-burger-menu">
            <svg viewBox="0 0 1024 1024" className="sponsors-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="sponsors-mobile-menu">
            <div className="sponsors-nav1">
              <div className="sponsors-container1">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="sponsors-image"
                />
                <div
                  data-role="CloseMobileMenu"
                  className="sponsors-menu-close"
                >
                  <svg viewBox="0 0 1024 1024" className="sponsors-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks rootClassName="rootClassName11"></NavigationLinks>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="sponsors-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="sponsors-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="sponsors-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <Link to="/contact-us" className="sponsors-navlink button">
          Contact Us for Other Opportunities
        </Link>
        <span className="sponsors-text003">
          <span className="sponsors-text004">PLATINUM ($2500- $3999)</span>
          <br className="sponsors-text005"></br>
          <br></br>
          <span>
            - Everything from
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="sponsors-text008">GOLD</span>
          <br></br>
          <span>- Company name and logo on team banner</span>
          <br></br>
          <span>- Company name and logo on team flag </span>
          <br></br>
        </span>
        <span className="sponsors-text014">
          <span className="sponsors-text015">GOLD ($1000- $2499)</span>
          <br className="sponsors-text016"></br>
          <br></br>
          <span>
            - Everything from
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="sponsors-text019">SILVER</span>
          <br></br>
          <span>- Company name and logo on team t-shirts</span>
          <br></br>
          <br></br>
        </span>
        <span className="sponsors-text024">
          <span className="sponsors-text025">BRONZE ($100 - $499)</span>
          <br className="sponsors-text026"></br>
          <br></br>
          <span>- Thank you letter from team</span>
          <br></br>
          <span>- Company name (no logo) on website         </span>
          <br></br>
          <br></br>
        </span>
        <span className="sponsors-text033">
          <span className="sponsors-text034">SILVER ($500 - $999)</span>
          <br className="sponsors-text035"></br>
          <br className="sponsors-text036"></br>
          <span>
            - Everything from
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="sponsors-text038">BRONZE</span>
          <br></br>
          <span>- Company name (no logo) on team t-shirts</span>
          <br></br>
          <span>- Company name and logo on website         </span>
          <br></br>
        </span>
        <Link to="/" className="sponsors-navlink1 button">
          Back
        </Link>
        <div className="sponsors-container2">
          <span className="sponsors-text044">
            <br></br>
            <span className="sponsors-text046">
              Why Sponsor?                                                     
                                                                               
                                                                               
                             
            </span>
            <br></br>
            <span className="sponsors-text048">
              - Sponsorship money is tax deductible
            </span>
            <br></br>
            <br></br>
            <span className="sponsors-text051">
              - Advertisement (Shirts, banners, robots, website, etc.)
            </span>
            <br></br>
            <br></br>
            <span className="sponsors-text054">
              - Raise your profile with the next generation of engineers
              (internship opportunities)
            </span>
            <br></br>
            <br></br>
            <span className="sponsors-text057">- Employees who mentor us </span>
            <span className="sponsors-text058">
              gain valuable experience and enhance their professional skills
            </span>
            <br></br>
            <br></br>
            <br></br>
            <span className="sponsors-text062">
                                                    
            </span>
            <br></br>
            <span className="sponsors-text064">
                                                                 
            </span>
            <br></br>
            <span className="sponsors-text066">
                                                     
            </span>
            <br></br>
            <span className="sponsors-text068">
                                                       
            </span>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </span>
          <span className="sponsors-text075">
            <br></br>
            <span className="sponsors-text077">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
          </span>
        </div>
        <span className="sponsors-text079">Monetary Options</span>
        <span className="sponsors-text080">Sponsor Tiers</span>
        <Link to="/mentor" className="sponsors-navlink2 button">
          Mentoring Details
        </Link>
        <span className="sponsors-text081">
          Other Options (Mentors, workspaces, etc.)
        </span>
        <span className="sponsors-text082">
          Item value will be used to determine sponsor tier*
        </span>
        <Link to="/donate" className="sponsors-navlink3 button">
          <span>
            <span>Items</span>
            <br></br>
          </span>
        </Link>
        <Link to="/donate" className="sponsors-navlink4 button">
          <span>
            <span>Money</span>
            <br></br>
          </span>
        </Link>
        <span className="sponsors-text089">
          <span className="sponsors-text090">DIAMOND ($4000 and above) </span>
          <br className="sponsors-text091"></br>
          <br></br>
          <span>
            - Everything from
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="sponsors-text094">PLATINUM</span>
          <br></br>
          <span>- Company logo and name on robot             </span>
          <br></br>
          <span>- Company name announced before match</span>
          <br></br>
        </span>
      </div>
    </div>
  )
}

export default Sponsors
