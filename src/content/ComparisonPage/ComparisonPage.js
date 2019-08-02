import React from 'react';

//carbon componenets
import {
    Tile,
} from 'carbon-components-react/lib/components/Tile';
import Button from 'carbon-components-react/lib/components/Button';

//icons
import CheckMarkFilled20 from '@carbon/icons-react/lib/checkmark--filled/20';
//import CheckMarkOutline20 from '@carbon/icons-react/lib/checkmark--outline/20';
import Pin20 from '@carbon/icons-react/lib/pin/20';
import LeftChevron20 from '@carbon/icons-react/lib/chevron--left/20';

const ComparisonPage = () => {
  return(
    <div>
        <LeftChevron20 />
        <h1 className="talent-pool-page--h1">Talent Pool Comparison</h1>
        <h2 className="talent-pool-page--h2">— Compare Your Candidates —</h2>
        <Tile>
            <table>
                <tr>
                    <th><h1>JKY</h1><p>Lorem ipsum dolor sit amet, ex erant legere eam, quot eleifend aliquando ea vim. Erat corpora platonem quo cu. Sensibus delicatissimi eum id, mel quidam equidem ut. Vis elit vitae temporibus.</p></th>
                    <th><h1>AST</h1><p>Lorem ipsum dolor sit amet, ex erant legere eam, quot eleifend aliquando ea vim. Erat corpora platonem quo cu. Sensibus delicatissimi eum id, mel quidam equidem ut. Vis elit vitae temporibus.</p></th>
                </tr>
                <tr>
                    <td><CheckMarkFilled20 className="comparison-page--icon"/>Perspective</td>
                    <td><CheckMarkFilled20 className="comparison-page--icon"/>Perspective</td>
                </tr>
                <tr>
                    <td><CheckMarkFilled20 className="comparison-page--icon"/>Skills</td>
                    <td><CheckMarkFilled20 className="comparison-page--icon"/>Skills</td>
                </tr>
                <tr>
                    <td><CheckMarkFilled20 className="comparison-page--icon"/>Education</td>
                    <td><CheckMarkFilled20 className="comparison-page--icon"/>Education</td>
                </tr>
                <tr>
                    <td><CheckMarkFilled20 className="comparison-page--icon"/>Hobbies</td>
                    <td><CheckMarkFilled20 className="comparison-page--icon"/>Hobbieas</td>
                </tr>
                <tr>
                    <td><CheckMarkFilled20 className="comparison-page--icon"/>Personality</td>
                    <td><CheckMarkFilled20 className="comparison-page--icon"/>Personality</td>
                </tr>
                <tr>
                    <td><CheckMarkFilled20 className="comparison-page--icon"/>Languages</td>
                    <td><CheckMarkFilled20 className="comparison-page--icon"/>Languages</td>
                </tr>
                <tr>
                    <td><Button>Pin<Pin20 className="bx--btn__icon"/></Button></td>
                    <td><Button>Pin<Pin20 className="bx--btn__icon"/></Button></td>
                </tr>
            </table>
        </Tile>
    </div>
  );
};

export default ComparisonPage;