import React from 'react';

export const HorizontalGrid = (props) => {
    return (
        <div className="horizontal-grid" style={{width: props.width}}></div>
    );
}

export class HorizontalGridLayer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let horizontalGrid = [];
        let gridWidth = 90 / this.props.column;

        for(let i=0; i < this.props.column; i++) {
            horizontalGrid.push(<HorizontalGrid width={gridWidth + '%'} />);
        }

        return (
            <div className="horizontal-grid-layer">
                {horizontalGrid}
            </div>
        );
    }
}
