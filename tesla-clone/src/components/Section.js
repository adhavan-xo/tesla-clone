import React from "react";
import styled from "styled-components";
function Section(props) {
  return (
    <Wrap BgImage={props.BackgroundImg}>
      <Itemtext>
        <h1>{props.Title}</h1>
        <p>{props.Description}</p>
      </Itemtext>
      <Button>
        <ButtonGroup>
          <Button1> {props.LeftBtnText}</Button1>
          {props.RightBtnText && <Button2>{props.RightBtnText}</Button2>}
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Button>
    </Wrap>
  );
}

export default Section;
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  background-image: url("/images/model-s.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.BgImage}" )`};
`;
const Itemtext = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Button1 = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const Button2 = styled(Button1)`
  background: white;
  opacity: 0.65;
  color: black;
`;
const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

const Button = styled.div``;
