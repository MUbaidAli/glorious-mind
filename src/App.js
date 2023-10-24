import React, { Component } from "react";
import SplitLayout from "./hireFromUsComponents/splitLayout/splitLayout";
import img1 from "./assets/hero.png";
import HowItWorks from "./hireFromUsComponents/howItWorks/HowItWorks";
import PlacementTeam from "./hireFromUsComponents/placementTeam/placementTeam";
import CTADiscord from "./hireFromUsComponents/CTADiscord/CTADiscord";
import Testimonial from "./hireFromUsComponents/testimonial/Testimonial";
class App extends Component {
  render() {
    return (
      <>
        <div className="splitLayout-section">
          <div className="container">
            <SplitLayout
              heading="Hire top 1% Data Science talent"
              paragraph="Build your Data & Engineering Team with industry ready top skilled tech talent."
              btn="HIRE NOW"
              imgPath={img1}
            />
            <SplitLayout
              addClass="left"
              heading="Hire top 1% Data Science talent"
              paragraph="Build your Data & Engineering Team with industry ready top skilled tech talent."
              btn="HIRE NOW"
              imgPath={img1}
            />
            <SplitLayout
              heading="Hire top 1% Data Science talent"
              paragraph="Build your Data & Engineering Team with industry ready top skilled tech talent."
              btn="HIRE NOW"
              imgPath={img1}
            />
            <SplitLayout
              addClass="left"
              heading="Hire top 1% Data Science talent"
              paragraph="Build your Data & Engineering Team with industry ready top skilled tech talent."
              btn="HIRE NOW"
              imgPath={img1}
            />
          </div>
        </div>

        <div className="container">
          <Testimonial />

          <HowItWorks title="How it works?" />
          <PlacementTeam title="Start hiring the top 1% Data Science Talent" />
          <CTADiscord />
        </div>
      </>
    );
  }
}
export default App;
