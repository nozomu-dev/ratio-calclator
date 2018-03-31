import React from 'react';

export const VerticalGrid = (props) => {
    return (
        <div className="vertical-grid" style={{height: props.height}}></div>
    );
}

export class VerticalGridLayer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let height = document.getElementById('app').clientHeight;
        let verticalRepeat = height / this.props.data.lineHeight;

        let verticalGrid = [];
        for (let i=0; i<verticalRepeat; i++) {
            verticalGrid.push(<VerticalGrid height={this.props.data.lineHeight} />)
        }

        return (
            <div className="vertical-grid-layer">{verticalGrid}</div>
        );
    }
}
