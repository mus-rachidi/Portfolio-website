import React from 'react'
import resume from '../assets/Resume.pdf'

const About = () => {
  return (
    <div className='container-fluid bg-light pt-5 d-flex flex-column align-items-center min-vh-100'>
      <p className="text-center lead m-4">
      Recent 42 Network graduate with a passion for technology and a drive to excel in the field of DevOps. With hands-on experience in automation, cloud computing, and continuous delivery, I bring a strong technical foundation to my work. As a fast learner and team player, I'm eager to put my skills to the test and make a positive impact in the industry. Connect with me to learn more about my experience and how I can bring value to your organization. 
      </p>
      <a href={resume} download className="btn btn-primary mt-5 custom-btn fw-bold">Download My Resume</a>
      <h3 className='pt-5 pb-2 custom-color'>Languages and tools I use:</h3>

      <p className='lead'>
        <img className='me-2' src="https://lambda.mu/static/images/docker.png" alt="html5" width="60" height="60"/>
        <img className='m-2' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="60" height="60"/>
        <img className='m-2' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="30" height="35"/>
        <img className='m-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" width="35" height="35"/>
    
        <img className='m-2' src="https://cdn.cdnlogo.com/logos/n/49/node-js.svg" alt="git" width="60" height="60"/>
        <img className='m-2' src="https://cdn.cdnlogo.com/logos/g/31/github.svg" alt="git" width="60" height="60"/>
        <img className='m-2' src="https://cdn.cdnlogo.com/logos/m/25/mongodb.svg" alt="git" width="60" height="60"/>
        <img className='m-2' src="https://cdn.cdnlogo.com/logos/s/14/socket-io.svg" alt="git" width="35" height="35"/>

        
        <img className='m-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git" width="35" height="35"/>
      </p>
      
    </div>
  )
}

export default About