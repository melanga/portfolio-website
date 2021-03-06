import styled from "styled-components";

export const EducationTimelineWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 400px;
  @media screen and (max-width: 530px) {
    width: 380px;
  }
  @media screen and (max-width: 480px) {
    width: 340px;
  }
  @media screen and (max-width: 370px) {
    width: 300px;
  }
  @media screen and (max-width: 320px) {
    width: 280px;
  }
`;

export const EducationTextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 480px) {
    padding-bottom: 0px;
  }
`;
