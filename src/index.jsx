import React from 'react'
import { render } from 'react-dom'

class InputFontsize extends React.Component {
    constructor(props) {
        super(props);
        this.state = {fontsize: this.props.default}
        this.update = this.update.bind(this);
    }
    update(e) {
        let value = e.target.value;
        this.props.update('fontsize', value);
    }
    render() {
        return (
            <div>
                <label for="">base font size</label>
                <input type="text" value={this.props.default} onChange={this.update} />
                <p>{this.props.default}</p>
            </div>
        )
    }
}

class InputLineHeight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {fontsize: this.props.default}
        this.update = this.update.bind(this);
    }
    update(e) {
        let value = e.target.value;
        this.props.update('lineHeight', value);
    }
    render() {
        return (
            <div>
                <label for="">line height</label>
                <input type="text" value={this.props.default} onChange={this.update} />
                <p>{this.props.default}</p>
            </div>
        )
    }
}

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            use: 'ratio-gold',
            fontsize: 16,
            lineHeight: 'ratio',
            containerWidth: 980,
            column: 12,
            gutter: 'line-height'
        };
        this.update = this.update.bind(this);
    }

    update(key, value) {
        this.setState({[key]: value});
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <InputFontsize default={this.state.fontsize} update={this.update} />
                <InputLineHeight default={this.state.lineHeight} update={this.update} />
            </div>
        );
    }
}

render(<SideBar />, document.getElementById('app'));
