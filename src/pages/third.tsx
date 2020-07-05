import React, {useEffect} from "react";
import { animated, config } from "react-spring";
import { GatsbyLocation } from "local-types";

import About from "../components/Second";
import Layout from "../components/Layout";
import { useSiteMetadata, usePageTransitions } from "../hooks";

interface ThirdPageProps {
  location: GatsbyLocation;
  preivousPath?: string;
  nextPath?: string;
}

const ThirdPage: React.FunctionComponent<ThirdPageProps> = ({
  location,
  preivousPath="/second",
}): React.ReactElement => {
  const { title: siteTitle, author } = useSiteMetadata();
  const isBrowser = typeof window !== `undefined`
  let trasnlatePage;
  
  if(location.state !== null && isBrowser) {
    
    if (location.state.prevPath != '/second') {
      trasnlatePage=-100
    }  else {
      trasnlatePage=100 
    }
  }
  
  
  
  const transitions = usePageTransitions({
    config: config.gentle,
    translateX: trasnlatePage,
    location,
  });

  return (
    <Layout location={location} title={siteTitle} preivousPath={preivousPath} >
      {transitions.map(({ props, key }) => (
        <animated.div key={key} style={props}>
          <About author={author} />
        </animated.div>
      ))}
    </Layout>
  );
};

export default ThirdPage;


