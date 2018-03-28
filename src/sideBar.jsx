import React from 'react';

export const SideBar = (props) => {
    return (
        <div className="sidebar">
            <Inputs name={'fontSize'} text={'base font size'} default={props.fontSize} update={props.update} />
            <Inputs name={'containerWidth'} text={'container size'} default={props.containerWidth} update={props.update} />
            <Inputs name={'column'} text={'column'} default={props.column} update={props.update} />
        </div>
    )
}

export class Inputs extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    onChange(label, event) {
        const newState = {};
        newState[label] = event.target.value;
        this.props.update(newState);
    }
    render() {
        return (
            <div>
                <label for="">{this.props.text}</label>
                <input type="number" value={this.props.default} onChange={(event) => this.onChange(this.props.name, event)} />
            </div>
        )
    }
}
