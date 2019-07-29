import React from 'react';
import RadarGraph from '../../components/RadarGraph';
import HeatMap from '../../components/HeatMap';
import RadioTab from '../../components/RadioTabs';

const LandingPage = () => {
  return( 
    <div>
      <RadioTab />
      <RadarGraph />
      <HeatMap />
    </div>
  );
};

export default LandingPage;
