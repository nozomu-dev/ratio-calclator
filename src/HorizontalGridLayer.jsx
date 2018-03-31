import React from 'react';

export const HorizontalGrid = (props) => {
    return (
        <div className="horizontal-grid" style={{width: props.width, marginRight: props.lineHeight}}></div>
    );
}

export class HorizontalGridLayer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let horizontalGrid = [];
        let gridWidth = 100 / this.props.column;

        for(let i=0; i < this.props.column; i++) {
            horizontalGrid.push(<HorizontalGrid width={gridWidth + '%'} lineHeight={this.props.data.lineHeight + 'px'}/>);
        }

        return (
            <div className="horizontal-grid-layer" style={{paddingLeft: this.props.data.lineHeight + 'px'}} >
                {horizontalGrid}
            </div>
        );
    }
}
