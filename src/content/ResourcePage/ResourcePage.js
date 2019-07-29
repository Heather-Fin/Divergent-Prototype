import React from 'react';
import ResourceCard from '../../components/ResourceCard';

const ResourcePage = () => {
  return(
    <div className="bx--grid bx--grid--full-width resource-page">
        <div className="bx--row">
            <div className="bx--col">
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