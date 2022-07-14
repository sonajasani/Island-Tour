import { NavLink } from 'react-router-dom';
import developerpic from '../../images/developerpic.png'
import './About.css'

const About = () =>{
    return (
        <>
        <div className="about-main-div">
            <div className="developer-info">
                <div className='text-info'>
                    <h1>About Me :</h1>
                    <h2>Hi, I'm Sona Jasani</h2>
                    <h3>I'm a passionate software engineer driven by the desire to create new, amazing experiences. Since creating my first application and seeing it in action, I was obsessed with creating solutions to solve problems and enhance users' experiences.</h3>
                    <div className='links'>
                        <a href='https://github.com/sonajasani' className='github-div'>
                            <i class="fa fa-github" aria-hidden="true"></i>
                        </a>
                        <a href='https://www.linkedin.com/in/sona-jasani-3b3540194/' className='linkedin-div'>
                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div classname='img-div'>
                    <img src={developerpic} alt="" className='developer-pic-div'></img>
                </div>
            </div>
            <div className="project-info">
                <div className='project-sub-div'>
                    <div classname='project-title-div'>
                        <h2>Project: Island Tour</h2>
                    </div>
                    <div className='technologies-div'>
                        <h3>Technologies used:</h3>
                        <ul>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Flask</li>
                            <li>Flask Alembic</li>
                            <li>Docker</li>
                            <li>AWS S3 Buckets</li>
                            <li>CSS</li>
                            <li>HTML</li>
                            <li>PostgreSQL</li>
                            <li>Python</li>
                            <li>JavaScript</li>
                        </ul>
                    </div>
                </div>
                <div classname='other-project-div'>
                    <h2>Other Projects:</h2>
                    <h4>
                        <NavLink to='http://music-storm-7.herokuapp.com/' id='music-storm-id'>
                            MusicStorm
                        </NavLink>
                    </h4>
                    <h4>
                        <NavLink to='https://who-dis-app.herokuapp.com/' id='who-dis-id'>
                            WhoDis?
                        </NavLink>
                    </h4>
                    <h4>
                        <NavLink to='https://aa-goodbois.herokuapp.com/' id='goodbois-id'>
                            Goodbois
                        </NavLink>
                    </h4>
                </div>
            </div>
        </div>
        </>

    )
}


export default About;