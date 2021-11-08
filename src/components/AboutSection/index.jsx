import React from "react";
import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
} from "./AboutSectionElements";

class AboutSection extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AboutContainer lightBg={this.props.lightBg} id={this.props.id}>
          <AboutWrapper>
            <AboutRow imgStart={this.props.imgStart}>
              <Column1>
                <TextWrapper>
                  <TopLine>{this.props.topLine}</TopLine>
                  <Heading lightText={this.props.lightText}>
                    {this.props.headLine}
                  </Heading>
                  <Subtitle darkText={this.props.darkText}>
                    {this.props.description}
                  </Subtitle>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Img src={this.props.img} alt={this.props.alt} />
                </ImgWrap>
              </Column2>
            </AboutRow>
          </AboutWrapper>
        </AboutContainer>
      </React.Fragment>
    );
  }
}

export default AboutSection;
