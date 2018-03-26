import React from 'react'
import { render } from 'react-dom'

let ratio = 1.618;
const x1 = ratio;
const x2 = ratio * ratio;
const x3 = x2 * ratio;
const x4 = x3 * ratio;
const x5 = x4 * ratio;



/**
 * Class Components
 */

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



/**
 * Functional Components
 */

 const HorizontallGridLayer = (props) => {
     return (
         <div></div>
     );
 }

const VerticalGridLayer = (props) => {
    return (
        <div></div>
    );
}


const StyleGenerator = ({size}) => ({
    fontSize: size
});

const TitleFirst = (props) => {
    return <h1 style={StyleGenerator(props)}>Title text <span className="title-label">{props.size}px</span></h1>;
}

const TitleSecond = (props) => {
    return <h2 style={StyleGenerator(props)}>Title text<span className="title-label">{props.size}px</span></h2>
}

const TitleThird = (props) => {
    return <h3 style={StyleGenerator(props)}>Title text<span className="title-label">{props.size}px</span></h3>;
}

const TextMain = (props) => {
    return (
        <p style={StyleGenerator(props)}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est} laborum.
        </p>
    );
}

const TextSmall = (props) => {
    return <small style={StyleGenerator(props)}>This is small text.</small>;
}

/**
 * Parent Components
 */

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fontsize: 16,
            lineHeight: 'ratio',
            containerWidth: 980,
            column: 12,
            gutter: 'line-height'
        };
        this.update = this.update.bind(this);
        console.log(this.state.styles)
    }

    update(key, value) {
        this.setState({[key]: value});
        console.log(this.state);
    }

    render() {
        return (
            <div className="container">
                <div className="sidebar">
                    <InputFontsize default={this.state.fontsize} update={this.update} />
                    <InputLineHeight default={this.state.lineHeight} update={this.update} />
                </div>
                <div class="contents">
                    <TitleFirst size={this.state.fontsize * x4} />
                    <TitleSecond size={this.state.fontsize * x3} />
                    <TitleThird size={this.state.fontsize * x2} />
                    <TextMain size={this.state.fontsize} />
                    <TextSmall size={this.state.fontsize / x1} />
                </div>
            </div>
        );
    }
}


render(<Container />, document.getElementById('app'));
