import React from "react";
import styled from "styled-components";
import Section from "./Section";
function Home() {
  return (
    <Container>
      <Section
        Title="Model S"
        Description="order online for touchless delivery"
        BackgroundImg="model-s.jpg"
        LeftBtnText="Custom order"
        RightBtnText="Existing Inventory"
      />
      <Section
        Title="Model y"
        Description="order online for touchless delivery"
        BackgroundImg="model-y.jpg"
        LeftBtnText="Custom order"
        RightBtnText="Existing Inventory"
      />
      <Section
        Title="Model 3"
        Description="order online for touchless delivery"
        BackgroundImg="model-3.jpg"
        LeftBtnText="Custom order"
        RightBtnText="Existing Inventory"
      />
      <Section
        Title="Model x"
        Description="order online for touchless delivery"
        BackgroundImg="model-X.jpg"
        LeftBtnText="Custom order"
        RightBtnText="Existing Inventory"
      />
      <Section
        Title="Lowest Cost Solar Panels in America"
        Description="Solar Roof Costs Less Than a Nee Roofs"
        BackgroundImg="solar-roof.jpg"
        LeftBtnText="Order now"
        RightBtnText="Learn more"
      />
      <Section
        Title="Solar for New Roofs"
        Description=""
        BackgroundImg="solar-panel.jpg"
        LeftBtnText="Order now"
        RightBtnText="Learn more"
      />
      <Section
        Title="Accessories"
        Description=""
        BackgroundImg="accessories.jpg"
        LeftBtnText="Order now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
