import React from 'react';
import ResourceCard from '../../components/ResourceCard';

const ResourcePage = () => {
  return(
    <div className="bx--grid bx--grid--full-width resource-page">
        <div className="bx--col-md-4 bx--col-lg-7">
            <div className="bx--row">
                <ResourceCard />
                <ResourceCard />
                <ResourceCard />
                <ResourceCard />
            </div>
            <div className="bx--row">
                <ResourceCard />
                <ResourceCard />
                <ResourceCard />
                <ResourceCard />
            </div>
        </div>
    </div>
  );
};

export default ResourcePage;
