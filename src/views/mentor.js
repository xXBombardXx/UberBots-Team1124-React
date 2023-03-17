import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import './mentor.css'

const Mentor = (props) => {
  return (
    <div className="mentor-container">
      <Helmet>
        <title>Mentor - UberBots Team1124</title>
        <meta property="og:title" content="Mentor - UberBots Team1124" />
      </Helmet>
      <div className="mentor-hero">
        <header data-role="Header" className="mentor-header">
          <div className="mentor-nav"></div>
          <h1 className="mentor-text">
            <span className="mentor-text001">Mentoring Details</span>
            <br className="mentor-text002"></br>
          </h1>
          <div className="mentor-btn-group"></div>
          <div data-role="BurgerMenu" className="mentor-burger-menu">
            <svg viewBox="0 0 1024 1024" className="mentor-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="mentor-mobile-menu">
            <div className="mentor-nav1">
              <div className="mentor-container1">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="mentor-image"
                />
                <div data-role="CloseMobileMenu" className="mentor-menu-close">
                  <svg viewBox="0 0 1024 1024" className="mentor-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks rootClassName="rootClassName17"></NavigationLinks>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="mentor-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="mentor-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="mentor-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <Link to="/" className="mentor-navlink button">
          Back
        </Link>
        <div className="mentor-container2">
          <span className="mentor-text003">
            <br></br>
            <span className="mentor-text005">Important Team Information</span>
            <br className="mentor-text006"></br>
            <br></br>
            <span className="mentor-text008">
              - Pre-season:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="mentor-text009">
              October to January (can vary)
            </span>
            <br className="mentor-text010"></br>
            <span className="mentor-text011">
              - Build season:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="mentor-text012">
              January to April (potentially more if qualify for higher
              championships)
            </span>
            <br className="mentor-text013"></br>
            <span className="mentor-text014">
              - Meeting Time (Build Season): 
            </span>
            <span className="mentor-text015">
              3pm - 5pm on weekdays and 9am - 3pm  on Saturdays (can vary)
            </span>
            <br className="mentor-text016"></br>
            <span className="mentor-text017">- Meeting Time (Pre-season):</span>
            <span className="mentor-text018">
              {' '}
              3pm -4pm twice during the week 
            </span>
            <br className="mentor-text019"></br>
            <span className="mentor-text020">
              - Location:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="mentor-text021">Avon High School, CT</span>
            <br className="mentor-text022"></br>
            <br></br>
            <span className="mentor-text024">Overall Requirements</span>
            <br className="mentor-text025"></br>
            <br className="mentor-text026"></br>
            <span className="mentor-text027">
              - Must pass Avon High School background check
            </span>
            <br className="mentor-text028"></br>
            <span className="mentor-text029">
              - Must be at least 21 years of age
            </span>
            <br className="mentor-text030"></br>
            <span className="mentor-text031">
              - Mentor does NOT have to meet 100% of the time (flexible)
            </span>
            <br className="mentor-text032"></br>
            <br className="mentor-text033"></br>
            <span className="mentor-text034">Specific Requirements</span>
            <br className="mentor-text035"></br>
            <br className="mentor-text036"></br>
            <span className="mentor-text037">
              - Engineering mentors (mechanical, electrical, and software) - 
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="mentor-text038">
              Previous professional experience
            </span>
            <br className="mentor-text039"></br>
            <br className="mentor-text040"></br>
            <span className="mentor-text041">
              - Machine shop mentors (craftsmanship and power tools) -
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="mentor-text042">
              Previous professional experience
            </span>
            <br className="mentor-text043"></br>
            <br className="mentor-text044"></br>
            <span className="mentor-text045">
              - Fundraising and marketing mentors -
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="mentor-text046">
              Previous professional or unprofessional experience
            </span>
            <br className="mentor-text047"></br>
            <br className="mentor-text048"></br>
            <span className="mentor-text049">
              - Project manager mentors -
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="mentor-text050">
              Previous professional experience
            </span>
            <span className="mentor-text051">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
          </span>
          <span className="mentor-text053">
            <br></br>
            <span className="mentor-text055">Important Team Information</span>
            <br className="mentor-text056"></br>
            <br></br>
            <span className="mentor-text058">
              - Pre-season:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="mentor-text059">
              October to January (can vary)
            </span>
            <br className="mentor-text060"></br>
            <span className="mentor-text061">
              - Build season:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="mentor-text062">
              January to April (potentially more if qualify for higher
              championships)
            </span>
            <br className="mentor-text063"></br>
            <span className="mentor-text064">
              - Meeting Time (Build Season): 
            </span>
            <span className="mentor-text065">
              3pm - 5pm on weekdays and 9am - 3pm  on Saturdays (can vary)
            </span>
            <br className="mentor-text066"></br>
            <span className="mentor-text067">- Meeting Time (Pre-season):</span>
            <span className="mentor-text068">
              {' '}
              3pm -4pm twice during the week 
            </span>
            <br className="mentor-text069"></br>
            <span className="mentor-text070">
              - Location:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="mentor-text071">Avon High School, CT</span>
            <br className="mentor-text072"></br>
            <br></br>
            <span className="mentor-text074">Overall Requirements</span>
            <br className="mentor-text075"></br>
            <br className="mentor-text076"></br>
            <span className="mentor-text077">
              - Must pass Avon High School background check
            </span>
            <br className="mentor-text078"></br>
            <span className="mentor-text079">
              - Must be at least 21 years of age
            </span>
            <br className="mentor-text080"></br>
            <span className="mentor-text081">
              - Mentor does NOT have to meet 100% of the time (flexible)
            </span>
            <br className="mentor-text082"></br>
            <br className="mentor-text083"></br>
            <span className="mentor-text084">Specific Requirements</span>
            <br className="mentor-text085"></br>
            <br className="mentor-text086"></br>
            <span className="mentor-text087">
              - Engineering mentors (mechanical, electrical, and software) - 
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="mentor-text088">
              Previous professional experience
            </span>
            <br className="mentor-text089"></br>
            <br className="mentor-text090"></br>
            <span className="mentor-text091">
              - Machine shop mentors (craftsmanship and power tools) -
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="mentor-text092">
              Previous professional experience
            </span>
            <br className="mentor-text093"></br>
            <br className="mentor-text094"></br>
            <span className="mentor-text095">
              - Fundraising and marketing mentors -
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="mentor-text096">
              Previous professional or unprofessional experience
            </span>
            <br className="mentor-text097"></br>
            <br className="mentor-text098"></br>
            <span className="mentor-text099">
              - Project manager mentors -
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="mentor-text100">
              Previous professional experience
            </span>
            <br className="mentor-text101"></br>
            <br className="mentor-text102"></br>
            <span className="mentor-text103">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="mentor-text104">
              - CAD mentor -
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="mentor-text105">
              Previous professional experience
            </span>
            <br></br>
          </span>
        </div>
        <div className="mentor-div">
          <DangerousHTML
            html={`<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScVsq7_NRQz0Z45pORy-2w13vtALC37-axfuNJ5K8xK7nqjzw/viewform?embedded=true" width="640" height="700" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`}
          ></DangerousHTML>
        </div>
      </div>
    </div>
  )
}

export default Mentor
