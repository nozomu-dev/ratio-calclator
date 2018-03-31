import React from 'react';
import { render } from 'react-dom';
import { RATIO } from './const.jsx';
import { Container } from './Container.jsx';


/**
 * Parent Components
 * 設定値を保持し、Containerに引き渡す。
 */

class RacioCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scaleUnitToUse: 'px',
            metalRatioToUse: RATIO.RATIO_GOLD,
            fontSize: 14,
            containerWidth: 980,
            column: 12,
            hasGutter: true,
            documentHeight: document.documentElement.clientHeight
        };
        this.update = this.update.bind(this);
    }

    update(newState) {
        this.setState(newState);
    }

    render() {
        return (
            <Container {...this.state} update={this.update} />
        );
    }
}

render(<RacioCalculator />, document.getElementById('app'));
