import React, { Component } from 'react';
import WorkCard from '../Components/WorkCard.js';
import './Home.css';
import Scura from '../Components/scura.png';
import ScuraAbout from '../Components/scuraAbout.png';
import ScuraForm from '../Components/scuraForm.png';
import ScuraProps from '../Components/scuraProps.png';
import Boff from '../Components/boff.png';
import BoffAbout from '../Components/boffAbout.png';
import BoffFilm from '../Components/boffFilm.png';
import BoffForm from '../Components/boffFooter.png';





export class Home extends Component {
  render() {
    return (
      <div>
        <WorkCard 
          slide1={Scura}
          firstSlide="Scura Homepage"
          slide2={ScuraAbout}
          secondSlide="Scura About Page"
          slide3={ScuraForm}
          thirdSlide="Scura Contact Form"
          slide4={ScuraProps}
          fourthSlide="Scura Properties Page"
        />
        <WorkCard 
          slide1={Boff}
          firstSlide="Brooklyn Outdoor Film Festival Homepage"
          slide2={BoffAbout}
          secondSlide="About the organizers"
          slide3={BoffFilm}
          thirdSlide="Posts page"
          slide4={BoffForm}
          fourthSlide="Pre-registration form embedded in the footer"
        />

      </div>
    )
  }
}



export default Home;
