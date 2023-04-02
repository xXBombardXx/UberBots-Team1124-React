import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>The ÜberBots</title>
        <meta
          name="description"
          content="The official website of team 1124, the ÜberBots"
        />
        <meta property="og:title" content="The ÜberBots" />
        <meta
          property="og:description"
          content="The official website of team 1124, the ÜberBots"
        />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <img
          alt="image"
          src="/playground_assets/open-graph-first-logo-200h.png"
          className="home-image"
        />
        <img
          alt="image"
          src="/playground_assets/uberbots%20modern%20logo%20better%20size-200w.png"
          className="home-image1"
        />
        <div className="home-navbar">
          <div className="home-left-side">
            <div className="home-links-container">
              <Link to="/mentor" className="home-link Anchor">
                Mentor
              </Link>
              <Link to="/sponsor-us" className="home-link1 Anchor">
                <span>Spons</span>
                <span>or Us</span>
              </Link>
              <Link to="/donate" className="home-link2 Anchor">
                Donate
              </Link>
              <Link to="/achievements" className="home-link3">
                <span className="Anchor">Achievements</span>
                <br></br>
              </Link>
            </div>
            <div
              data-thq="thq-dropdown"
              className="home-thq-dropdown list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="home-dropdown-toggle"
              >
                <div
                  data-thq="thq-dropdown-arrow"
                  className="home-dropdown-arrow"
                ></div>
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M64 192h896v192h-896zM64 448h896v192h-896zM64 704h896v192h-896z"></path>
                </svg>
              </div>
              <ul data-thq="thq-dropdown-list" className="home-dropdown-list">
                <li data-thq="thq-dropdown" className="home-dropdown list-item">
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle1"
                  >
                    <Link to="/mentor" className="home-navlink">
                      Mentor
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown1 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle2"
                  >
                    <Link to="/sponsor-us" className="home-navlink01">
                      Sponsor
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown2 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle3"
                  >
                    <Link to="/donate" className="home-navlink02">
                      Donate
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown3 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle4"
                  >
                    <Link to="/achievements" className="home-navlink03">
                      Achievements
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            <Link to="/first-info" className="home-navlink04">
              <span>
                About
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text05">FIRST</span>
            </Link>
          </div>
          <div className="home-right-side">
            <Link to="/contact-us" className="home-cta-btn Anchor button">
              CONTACT US
            </Link>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-container1">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="home-image2"
              />
              <div data-role="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-links-container1">
              <a href="#resources" className="home-link4 Anchor">
                Resources
              </a>
              <a href="#inspiration" className="home-link5 Anchor">
                Inspiration
              </a>
              <span className="home-link6 Anchor">Process</span>
              <span className="home-link7 Anchor">Our story</span>
            </div>
          </div>
        </div>
      </div>
      <div id="resources" className="home-hero">
        <div className="home-content-container">
          <div className="home-hero-text">
            <h1 className="home-heading">ÜberBots</h1>
            <span className="home-text06">
              <span className="home-text07">
                FIRST
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                robotics competition team based in Avon High School, Connecticut
              </span>
            </span>
          </div>
        </div>
      </div>
      <div id="inspiration" className="home-features">
        <label className="home-text09">WHAT WE BELIEVE IN</label>
        <div className="home-heading-container">
          <h2 className="home-text10">
            Learning by doing, Gracious professionalism, and STEM advocacy for
            all
          </h2>
        </div>
      </div>
      <div className="home-hero1">
        <div className="home-container2">
          <h1 className="home-text11">
            <span className="home-text12">About Us</span>
            <br></br>
          </h1>
          <span className="home-text14">
            <span className="home-text15">
              We are a
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text16">
              FIRST
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text17">
              robotics team working to promote science and technology not only
              in our school but also in our community. From our inception in
              2003, we have grown immensely over the past 20 years gaining
              national recognition for our hard work and accomplishments. In
              addition, we are the proud winners of four Connecticut regionals
              as well as winners of many community outreach awards.
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <div className="home-btn-group">
            <Link to="/achievements" className="home-navlink05 buttonUB button">
              Learn More
            </Link>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/uberbotsimage2-1400w.jpeg"
          className="home-image3"
        />
      </div>
      <div className="home-hero2">
        <img
          alt="image"
          src="/playground_assets/tj-1400w.jpg"
          className="home-image4"
        />
        <div className="home-container3">
          <div className="home-container4">
            <h1 className="home-text20">What we do</h1>
            <div className="home-btn-group1"></div>
            <span className="home-text21">
              <br></br>
              <span className="home-text23">
                Each January, we kickoff our season by learning a
                &quot;game&quot; for a robot to play set forth by an
                organization called
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text24">FIRST</span>
              <span className="home-text25">
                . Then we have six weeks (known as build season) to plan, build,
                and program a robot for our team. We learn, problem solve, and
                push through many challenges and hurdles to finish our robot and
                make it ready for competition.
              </span>
              <br></br>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
          <Link to="/first-info" className="home-navlink06 button">
            <span className="home-text30">
              <span>
                More About
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text32">FIRST</span>
            </span>
          </Link>
        </div>
      </div>
      <div className="home-hero3">
        <div className="home-container5">
          <div className="home-container6">
            <div className="home-container7">
              <div className="home-container8">
                <h1 className="home-text33">You can help</h1>
                <span className="home-text34">
                  <span className="home-text35">
                    The work we do would not be possible
                  </span>
                  <br className="home-text36"></br>
                  <span className="home-text37">
                    without the support of our mentors and 
                  </span>
                  <br className="home-text38"></br>
                  <span className="home-text39">sponsors.</span>
                  <br className="home-text40"></br>
                </span>
              </div>
              <Link to="/mentor" className="home-navlink07 button">
                Become a mentor
              </Link>
            </div>
            <Link to="/sponsor-us" className="home-navlink08 button">
              Become a sponsor
            </Link>
          </div>
          <Link to="/donate" className="home-navlink09 button">
            <span>
              <span>Donate</span>
              <br></br>
            </span>
          </Link>
        </div>
        <img
          src="/playground_assets/uberbotsimage3-1400w.jpeg"
          className="home-image5"
        />
      </div>
      <div className="home-section-separator"></div>
      <div className="home-section-separator1"></div>
      <div className="home-section-separator2"></div>
      <div className="home-section-separator3"></div>
      <div className="home-testimonial">
        <h1 className="home-text44">Our Sponsors</h1>
        <span className="home-text45">
          Interstate Battery of Hartford, Inc.
        </span>
      </div>
      <div className="home-footer-container">
        <div className="home-footer">
          <div className="home-social-links">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
              <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon08">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </div>
          <div className="home-copyright-container">
            <svg viewBox="0 0 1024 1024" className="home-icon10">
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
            </svg>
            <span className="home-link8 Anchor">Copyright, 2023</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
