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
            <h1 className="comparison-page--h1">Talent Pool Comparison</h1>
        </div>
        <h2 className="comparison-page--h2">— Compare Your Candidates —</h2>
        <Tile>
            <table className="comparison-page--tile">
                <tr className="comparison-page--table-header">
                    <th><h2 className="comparison-page--h1">AST</h2><p className="comparison-page--left-header comparison-page--p">I've lived in over 30 countries and love meeting new people. I have been self employed while traveling, and am comfortable with negotiating with team members.</p></th>
                    <th><h2 className="comparison-page--right-header comparison-page--h1">HRU</h2><p className="comparison-page--right-header comparison-page--p">I am from a large city and have experience working in a start-up environment. I work well in agile workspaces and hope to learn more about designing in a corporate workspace.</p></th>
                </tr>
                <tr>
                    <td><CheckMarkFilled20 className="comparison-page--icon"/>Perspective</td>
                    <td><CheckMarkFilled20 className="comparison-page--icon"/>Perspective</td>
                </tr>
                <tr>
                    <td><CheckMarkOutline20 className="comparison-page--icon"/>Skills</td>
                    <td><CheckMarkFilled20 className="comparison-page--icon"/>Skills</td>
                </tr>
                <tr>
                    <td><CheckMarkFilled20 className="comparison-page--icon"/>Education</td>
                    <td><CheckMarkFilled20 className="comparison-page--icon"/>Education</td>
                </tr>
                <tr>
                    <td><CheckMarkFilled20 className="comparison-page--icon"/>Interests</td>
                    <td><CheckMarkOutline20 className="comparison-page--icon"/>Interests</td>
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
                    <td>
                        <Button onClick={console.log('clicked meee 1')}>
                            Pin Candidate<Pin20 className="bx--btn__icon"/>
                        </Button>
                    </td>
                    <td>
                        <Button onClick={console.log('clicked meee 1')}>
                            Pin Candidate<Pin20 className="bx--btn__icon"/>
                        </Button>
                    </td>
                </tr>
            </table>
        </Tile>
    </div>
  );
};

export default ComparisonPage;