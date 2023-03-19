import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import './first-info.css'

const FIRSTInfo = (props) => {
  return (
    <div className="firs-info-container">
      <Helmet>
        <title>FIRST-Info - UberBots Team1124</title>
        <meta property="og:title" content="FIRST-Info - UberBots Team1124" />
      </Helmet>
      <div className="firs-info-hero">
        <header data-role="Header" className="firs-info-header">
          <div className="firs-info-nav"></div>
          <h1 className="firs-info-heading">
            <span className="firs-info-text">
              More About
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="firs-info-text01">FIRST</span>
            <br className="firs-info-text02"></br>
          </h1>
          <div className="firs-info-btn-group"></div>
          <div data-role="BurgerMenu" className="firs-info-burger-menu">
            <svg viewBox="0 0 1024 1024" className="firs-info-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="firs-info-mobile-menu">
            <div className="firs-info-nav1">
              <div className="firs-info-container1">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="firs-info-image"
                />
                <div
                  data-role="CloseMobileMenu"
                  className="firs-info-menu-close"
                >
                  <svg viewBox="0 0 1024 1024" className="firs-info-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks rootClassName="rootClassName13"></NavigationLinks>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="firs-info-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="firs-info-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="firs-info-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <img
          alt="image"
          src="/playground_assets/deankamer-min-1400w.jpg"
          loading="eager"
          className="firs-info-image1"
        />
        <Link to="/" className="firs-info-navlink button">
          <span className="firs-info-text03">
            <span>Back</span>
            <br></br>
            <br></br>
          </span>
        </Link>
        <div className="firs-info-container2">
          <span className="firs-info-text07">
            <br></br>
            <span className="firs-info-text09">
              &quot;To transform our culture by creating a world where science
              and technology are celebrated and where young people dream of
              becoming science and technology leaders.&quot;
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="firs-info-text10"></br>
            <span className="firs-info-text11">
              -Dean Kamen, Founder of
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="firs-info-text12">FIRST</span>
            <br className="firs-info-text13"></br>
            <br className="firs-info-text14"></br>
            <br></br>
            <br className="firs-info-text16"></br>
            <span className="firs-info-text17">
              FIRST
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              (For Inspiration and Recognition of Science and Technology) is a
              nonprofit organization founded by Dean Kamen in 1989. His goal was
              to expose students of all ages to science and technology in such a
              way that they would become inspired to become scientists and
              engineers in the future. Kamen worked with MIT mechanical
              engineering professor Dr. Woodie Flowers to create the first ever
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="firs-info-text19">
              FIRST
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              Robotics Competition (FRC) at a New Hampshire high school in 1992.
              From that point on,
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="firs-info-text21">
              FIRST
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              has grown to be one the largest robotics competitions in the
              world. The program has over 679,000 students working on thousands
              of robots with the assistance of over 100,000 mentors and 33,000
              volunteers from all disciplines such as engineering, fund raising,
              and team leadership. The program also expands beyond US borders to
              over a hundred countries like Israel, Brazil, Japan, and even
              Australia.
            </span>
            <br></br>
            <br className="firs-info-text24"></br>
            <br></br>
            <br className="firs-info-text26"></br>
            <span className="firs-info-text27">
              FIRST
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              have four main levels of competition: Junior FIRST Lego League for
              ages 6-9 (JFLL),
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="firs-info-text29">
              FIRST
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              Lego League for students in grades 4-8(FLL),
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="firs-info-text31">
              FIRST
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              Tech Challenge for students grades 9-12 (FTC), and The
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="firs-info-text33">
              FIRST
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              Robotics Competition, also for high school aged students (FRC).
              The
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="firs-info-text35">
              ÜberBots
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              compete on the FRC level, which is also the largest level of
              competition. Around the first or second week in January,
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="firs-info-text37">
              FIRST
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              releases a challenge for FRC students as well as a rule book with
              very specific details concerning the size of the robot, details
              about game play, and more. Students then have six weeks to design,
              build, and program their robots in order to be ready for the first
              regional competition. The day before the competition, students
              need to transport their robot along with some important equipment
              to the competition site. The equipment is very important as the
              robot is constantly being upgraded even in the middle of the
              competition! The winners of each of these regional events move
              onto the Championship tournament in Houston, Texas. This allows
              FRC to always been exciting, for no two games are ever the same.
              Starting from the end of the Championship event, the FRC Game
              Design Committee (GDC) starts working hard on the next game so
              it&apos;s almost perfect by kickoff (there are always constant
              updates being made, even between regional competitions).
            </span>
            <br></br>
          </span>
        </div>
        <span className="firs-info-text40">Dean Kamen</span>
      </div>
    </div>
  )
}

export default FIRSTInfo
