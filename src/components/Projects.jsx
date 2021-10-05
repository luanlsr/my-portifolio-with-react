import React, {useEffect} from 'react';
import '../styles/Projects.css'
import Aos from "aos";
import 'aos/dist/aos.css'
export default function Projects() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div className="projects" id="projects">
      <div className="projects-content">
        <h1 data-aos="zoom-in-up" data-aos-offset="50" data-aos-easing="ease-in-out-sine" data-aos-duration="2000">Projetos</h1>
      </div>
    </div>
  )
}
