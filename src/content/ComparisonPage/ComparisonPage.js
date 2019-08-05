import React from 'react';

//carbon componenets
import {
    Tile,
} from 'carbon-components-react/lib/components/Tile';
import Button from 'carbon-components-react/lib/components/Button';

//icons
import CheckMarkFilled20 from '@carbon/icons-react/lib/checkmark--filled/20';
import CheckMarkOutline20 from '@carbon/icons-react/lib/checkmark--outline/20';
import Pin20 from '@carbon/icons-react/lib/pin/20';
import LeftChevron20 from '@carbon/icons-react/lib/chevron--left/20';

const ComparisonPage = () => {
  return(
    <div>
        <div className="comparison-page--header">
            <a href="#/talent-pool">
                <LeftChevron20 className="comparison-page--left-chevron"/>
            </a>
            <h1 className="talent-pool-page--h1">Talent Pool Comparison</h1>
        </div>
        <h2 className="talent-pool-page--h2">— Compare Your Candidates —</h2>
        <Tile>
            <table className="comparison-page--tile">
                <tr className="comparison-page--table-header">
                    <th><h1>HRU</h1><p className="comparison-page--left-header">Lorem ipsum dolor sit amet, ex erant legere eam, quot eleifend aliquando ea vim. Erat corpora platonem quo cu. Sensibus delicatissimi eum id, mel quidam equidem ut. Vis elit vitae temporibus.</p></th>
                    <th><h1 className="comparison-page--right-header">AST</h1><p className="comparison-page--right-header">Lorem ipsum dolor sit amet, ex erant legere eam, quot eleifend aliquando ea vim. Erat corpora platonem quo cu. Sensibus delicatissimi eum id, mel quidam equidem ut. Vis elit vitae temporibus.</p></th>
                </tr>
                <tr>
                    <td><CheckMarkFilled20 className="comparison-page--icon"/>Perspective</td>
                    <td><CheckMarkFilled20 className="comparison-page--icon"/>Perspective</td>
                </tr>
                <tr>
                    <td><CheckMarkFilled20 className="comparison-page--icon"/>Skills</td>
                    <td><CheckMarkOutline20 className="comparison-page--icon"/>Skills</td>
                </tr>
                <tr>
                    <td><CheckMarkFilled20 className="comparison-page--icon"/>Education</td>
                    <td><CheckMarkFilled20 className="comparison-page--icon"/>Education</td>
                </tr>
                <tr>
                    <td><CheckMarkOutline20 className="comparison-page--icon"/>Interests</td>
                    <td><CheckMarkFilled20 className="comparison-page--icon"/>Interests</td>
                </tr>
                <tr>
                    <td><CheckMarkFilled20 className="comparison-page--icon"/>Personality</td>
                    <td><CheckMarkFilled20 className="comparison-page--icon"/>Personality</td>
                </tr>
                <tr>
                    <td><CheckMarkOutline20 className="comparison-page--icon"/>Languages</td>
                    <td><CheckMarkOutline20 className="comparison-page--icon"/>Languages</td>
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