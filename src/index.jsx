import React from 'react';
import { render } from 'react-dom';

import { RATIO } from './const.jsx';
import { SideBar, InputfontSize, InputLineHeight } from './SideBar.jsx';
import { HorizontalGrid, HorizontalGridLayer } from './HorizontalGridLayer.jsx';
import { Text, TextLayer } from './TextLayer.jsx';



/**
 * Functional Components
 */

const VerticalGrid = (props) => {
    return (
        <div className="vertical-grid" style={{height: props.height}}></div>
    );
}

class VerticalGridLayer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let height = document.documentElement.clientHeight;
        let verticalRepeat = height / this.props.lineHeight;

        let verticalGrid = [];
        for (let i=0; i<verticalRepeat; i++) {
            verticalGrid.push(<VerticalGrid height={this.props.lineHeight} />)
        }

        return (
            <div className="vertical-grid-layer">{verticalGrid}</div>
        );
    }
}

const BaseBlock = (props) => {
    return (
        <div className={'block-base'} style={{width: props.containerWidth + 'px'}}>
            <HorizontalGridLayer {...props} />
            <TextLayer {...props} />
        </div>
    );
}



/**
 * Parent Components
 */

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            calculationRatio: RATIO.RATIO_GOLD,
            fontSize: 16,
            containerWidth: 980,
            column: 12,
            gutter: true
        };
        this.update = this.update.bind(this);
        this.updateLineHeight = this.updateLineHeight.bind(this);
        this.lineHeight = this.state.fontSize * this.state.calculationRatio;
    }

    update(newState) {
        this.setState(newState);
    }

    updateLineHeight(fontSize, ratio) {
        this.lineHeight = Number(fontSize) * Number(ratio);
    }

    render() {
        return (
            <div className="container">
                <SideBar {...this.state} update={this.update} updateLineHeight={this.updateLineHeight}/>
                <div className="contents">
                    <VerticalGridLayer {...this.state} lineHeight={this.lineHeight} />
                    <BaseBlock {...this.state} />
                </div>
            </div>
        );
    }
}


render(<Container />, document.getElementById('app'));
