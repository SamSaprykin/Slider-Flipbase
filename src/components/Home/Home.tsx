import React from "react";
import { GatsbyLocation } from "local-types";

import DummySection from "./DummySection";


interface HomeProps {
  location: GatsbyLocation;
}

const Home: React.FunctionComponent<HomeProps> = ({
  
}): React.ReactElement => (
  <>
    <DummySection />
  </>
);

export default Home;
