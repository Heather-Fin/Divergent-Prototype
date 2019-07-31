import React from 'react';
import { Link } from 'react-router-dom';
import ChevronRight20 from '@carbon/icons-react/lib/chevron--right/20';

const Smiley = () => (
    <div>
        <h1>How you're doing compared to your Business Unit</h1>
        <p>You're team is doing better than 80% of your business unit in IBM's goals and skills!</p>
        
        <svg viewBox="0 0 252.54 34" className="smiley">
            {/* <g class="lg-smile">
                    <circle fill="rgba(0,0,0,0)" cx="17" cy="17" r="17"/>
            <path d="M17,1A16,16,0,1,1,1,17,16,16,0,0,1,17,1m0-1A17,17,0,1,0,34,17,17,17,0,0,0,17,0h0Z"/>
            <circle cx="22.1" cy="14" r="1.5"/>
            <circle cx="11.9" cy="14" r="1.5"/>
            <path d="M16.82,26.27a6.76,6.76,0,0,1-6-2.91l0,0a0.65,0.65,0,0,1,1-.82l0,0a5.53,5.53,0,0,0,5,2.44,5.41,5.41,0,0,0,5-2.43l0,0a0.65,0.65,0,1,1,1,.82l0,0A6.61,6.61,0,0,1,16.82,26.27Z"/>
            </g> */}

            <g class="md-smile">
                    <circle fill="rgba(0,0,0,0)" cx="71.85" cy="17" r="17"/>
            <path d="M71.85,26.67a7,7,0,0,1-4.93-2,0.64,0.64,0,1,1,.9-0.9,5.7,5.7,0,0,0,8,0,0.64,0.64,0,1,1,.9.9A7,7,0,0,1,71.85,26.67Z"/>
            <path d="M71.64,1a16,16,0,1,1-16,16,16,16,0,0,1,16-16m0-1a17,17,0,1,0,17,17,17,17,0,0,0-17-17h0Z"/>
            <circle cx="76.87" cy="14" r="1.5"/>
            <circle cx="66.67" cy="14" r="1.5"/>
            </g>

            <g class="no-smile">
                    <circle fill="rgba(0,0,0,0)" cx="126.27" cy="17" r="17"/>
            <path d="M126.27,1a16,16,0,1,1-16,16,16,16,0,0,1,16-16m0-1a17,17,0,1,0,17,17,17,17,0,0,0-17-17h0Z"/>
            <circle cx="131.57" cy="14" r="1.5"/>
            <circle cx="121.37" cy="14" r="1.5"/>
            <path d="M131.55,25.1H121.38a0.64,0.64,0,1,1,0-1.28h10.17A0.64,0.64,0,1,1,131.55,25.1Z"/>
            </g>

            <g class="sm-smile">
                    <circle fill="rgba(0,0,0,0)" cx="180.9" cy="17" r="17"/>
            <path d="M180.9,1a16,16,0,1,1-16,16,16,16,0,0,1,16-16m0-1a17,17,0,1,0,17,17,17,17,0,0,0-17-17h0Z"/>
            <circle cx="186" cy="14" r="1.5"/>
            <circle cx="175.8" cy="14" r="1.5"/>
            <path d="M181.25,23.27a6.94,6.94,0,0,1,4.93,2,0.64,0.64,0,0,1-.9.9,5.7,5.7,0,0,0-8,0,0.64,0.64,0,1,1-.9-0.9A7,7,0,0,1,181.25,23.27Z"/>
            </g>

            {/* <g class="xsm-smile">
                    <circle fill="rgba(0,0,0,0)" cx="235.54" cy="17" r="17"/>
            <path d="M235.54,1a16,16,0,1,1-16,16,16,16,0,0,1,16-16m0-1a17,17,0,1,0,17,17,17,17,0,0,0-17-17h0Z"/>
            <circle cx="240.64" cy="14" r="1.5"/>
            <circle cx="230.44" cy="14" r="1.5"/>
            <path d="M241.28,26.27a0.65,0.65,0,0,1-.5-0.23l0,0a5.53,5.53,0,0,0-5-2.44,5.42,5.42,0,0,0-5,2.43l0,0a0.65,0.65,0,1,1-1-.82l0,0a6.62,6.62,0,0,1,6-2.9,6.76,6.76,0,0,1,6,2.91l0,0A0.65,0.65,0,0,1,241.28,26.27Z"/>
            </g> */}
        </svg>

        
        <a a href="#example" element={Link} to="/resource" className="click-here">
            Click here to continue improving your team's diversity!
            <ChevronRight20 />
        </a>
    </div>
);

export default Smiley;