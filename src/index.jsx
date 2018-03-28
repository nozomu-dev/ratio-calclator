import React from 'react';
import { render } from 'react-dom';
import { SideBar, InputfontSize, InputLineHeight } from './SideBar.jsx';
import { HorizontalGrid, HorizontalGridLayer } from './HorizontalGridLayer.jsx';
import { Text, TextLayer } from './TextLayer.jsx';



/**
 * Functional Components
 */

const VerticalGridLayer = (props) => {
    return (
        <div></div>
    );
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
            fontSize: 16,
            culculationRatio: 1.618,
            containerWidth: 980,
            column: 12,
            gutter: 'line-height'
        };
        this.update = this.update.bind(this);
    }

    update(newState) {
        this.setState(newState);
    }

    render() {
        return (
            <div className="container">
                <SideBar {...this.state} update={this.update}/>
                <div className="contents">
                    <VerticalGridLayer {...this.state} />
                    <BaseBlock {...this.state} />
                </div>
            </div>
        );
    }
}


render(<Container />, document.getElementById('app'));
