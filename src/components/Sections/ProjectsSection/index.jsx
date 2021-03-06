import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated, config } from "react-spring";
import { ParallaxLayer } from "@react-spring/parallax";
import ProjectCard from "./projectCard";
import { projectData1, projectData2, projectData3 } from "./ProjectsData";

import {
  ProjectsContainer,
  ProjectsTitle,
  ProjectsWrapper,
} from "./ProjectsSectionElements";

const ProjectsSection = ({ width, mobileView }) => {
  const [enableHoverAnimation, setEnableHoverAnimation] = useState(true);
  let laptopView = width > 1200;

  const { ref, inView } = useInView({ threshold: mobileView ? 0 : 0.3 });

  useEffect(() => {
    setEnableHoverAnimation(laptopView);
  }, [laptopView]);

  const contentTextProps = useSpring({
    opacity: inView ? 1 : 0,
    marginTop: inView ? 0 : -200,
    config: config.gentle,
  });

  const contentLeftCardProps = useSpring({
    opacity: inView ? 1 : 0,
    marginLeft: inView ? 0 : -300,
    config: config.gentle,
    delay: 300,
  });

  const contentRightCardProps = useSpring({
    opacity: inView ? 1 : 0,
    marginRight: inView ? 0 : -300,
    config: config.gentle,
    delay: 300,
  });

  const contentMiddleCardProps = useSpring({
    opacity: inView ? 1 : 0,
    //marginRight: inView ? 0 : -400,
    config: config.slow,
    delay: 300,
  });

  return (
    <ProjectsContainer id="projects" ref={ref}>
      <ParallaxLayer
        offset={0}
        speed={0}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10%",
        }}
      >
        <animated.div style={contentTextProps}>
          <ProjectsTitle>My Projects</ProjectsTitle>
        </animated.div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={2.1}
        speed={1}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ProjectsWrapper>
          <animated.div style={contentLeftCardProps}>
            <ProjectCard {...projectData1} trigger={enableHoverAnimation} />
          </animated.div>
          <animated.div style={contentMiddleCardProps}>
            <ProjectCard {...projectData2} trigger={enableHoverAnimation} />
          </animated.div>
          <animated.div style={contentRightCardProps}>
            <ProjectCard {...projectData3} trigger={enableHoverAnimation} />
          </animated.div>
        </ProjectsWrapper>
      </ParallaxLayer>
    </ProjectsContainer>
  );
};

export default ProjectsSection;
