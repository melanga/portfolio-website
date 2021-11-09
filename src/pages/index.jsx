import React from "react";
import AboutSection from "../components/Sections/AboutSection";
import { aboutData } from "../components/Sections/AboutSection/Data";
import EducationSection from "../components/Sections/EducationSection";
import { educationData } from "../components/Sections/EducationSection/Data";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import SideNavBar from "../components/SideNavBar";
import TechnologiesSection from "../components/Sections/TechnologiesSection";
import { technologiesData } from "../components/Sections/TechnologiesSection/Data";

class Home extends React.Component {
  state = {
    isOpen: false,
  };

  toggleIsOpen = () => {
    let toggledOption = !this.state.isOpen;
    this.setState({ isOpen: toggledOption });
  };

  render() {
    return (
      <React.Fragment>
        <SideNavBar onToggle={this.toggleIsOpen} isOpen={this.state.isOpen} />
        <NavBar onToggle={this.toggleIsOpen} />
        <HeroSection />
        <AboutSection {...aboutData} />
        <EducationSection {...educationData} />
        <TechnologiesSection {...technologiesData} />
      </React.Fragment>
    );
  }
}

export default Home;