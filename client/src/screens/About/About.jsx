import ron from '../../screens/resources/ron.jpeg'
import kim from '../../screens/resources/kim.jpeg'
import jesh from '../../screens/resources/jesh.jpeg'
import './About.css'


function About() {
  return (
    <div className="about">
      {/* <a id='gitHub' href='https://github.com/kimcapgab/your-craft' target='_blank'>GitHub Project Repo</a> */}
      <div className="us-container">
      <div className="us">
          <div className="us-img">
            <img src={kim} alt='Kim' />
          </div>
          <div className='us-content'>
            <h1>Kim Gabbert</h1>
              <h2>Coming from an accounting and implementations background, my previous roles allowed me to research and
                help customers select the best software that met their needs. This thirst for knowledge and
                passion for solving problems led me to start a new career in Software Development, giving me the
                ability to design real-world applications with customers in mind. With five years of professional experience
                working in various environments from large corporations to start-ups, I am ready to help a team achieve
              company goals and to expand my knowledge and skillset to build a long-term career with a forward-thinking company.</h2>
            <div className='ron-links-container'>
              <div className="linkRon">
            <a href='http://www.linkedin.com/in/kim-capilla-gabbert'
                  target='_blank'
                  rel="noreferrer">

              LinkedIn
              </a>
              </div>
              <div className="linkRon">
            <a href='https://github.com/kimcapgab'
                  target='_blank'
                  rel="noreferrer">

              GitHub
                </a>
                </div>
              </div>
            </div>
            </div>
        <div className="us">
          <div className="us-img">
            <img src={ron} alt='Ron' />
          </div>
          <div className='us-content'>
            <h1>Ron Garofalo</h1>
            <div className='ron-links-container'>
              <div className="linkRon">
            <a href='https://www.linkedin.com/in/ron-garo/'
                  target='_blank'
                  rel="noreferrer">

                LinkedIn
              
                </a>
                </div>
          <div className="linkRon">
            <a href='https://github.com/Garofalo'
                  target='_blank'
                  rel="noreferrer">

              GitHub
              </a>
              </div>
              </div>
          </div>
          </div>
          
            <div className="us">
          <div className="us-img">
            <img src={jesh} alt='Jeshaiah' />
          </div>
          <div className='us-content'>
            <h1>Jeshaiah Miller</h1>
            <h2>I am a hard working and motivated full-stack software developer. Also, as a  young, yet driven mind,
              I aspire to accomplish all my career goals. I am a quick and effective learner with communicative and teamwork skills.
              I enjoy challenging my brain with tasks and problems. I am also an ammeter musician!</h2>
            <div className='ron-links-container'>
              <div className="linkRon">
            <a href='https://www.linkedin.com/in/jeshaiah-miller-a5ba10221/'
                  target='_blank'
                  rel="noreferrer">

              LinkedIn
                </a>
              </div>
              <div className="linkRon">
            <a href='https://github.com/jeshaiahmiller'
                  target='_blank'
                  rel="noreferrer">

              GitHub
                </a>
                </div>
            </div>
          </div>
          </div>

        
      </div>
    

    </div> );
}

export default About;