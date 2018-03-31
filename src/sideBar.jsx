import React from 'react';
import { RATIO } from './const.jsx';



export class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="sidebar">
                <div className={"service-title"}>#Ratio Calculator</div>
                <Inputs {...this.props} name={'metalRatioToUse'} type={'selects'} text={'Metal ratio to use'} options={[RATIO.RATIO_GOLD, RATIO.RATIO_SILVER, RATIO.RATIO_PLATINUM]}/>
                <Inputs {...this.props} name={'fontSize'} type={'inputs'} text={'base font size'} default={this.props.fontSize} />
                {/*<Inputs {...this.props} name={'methodOfLineHeight'} text={'line height'} type={'selects'} update={this.props.update} options={['ratio', '1.6', '1.8', '2.0']}/>*/}
                <Inputs {...this.props} name={'containerWidth'} type={'inputs'} text={'container size'} default={this.props.containerWidth}  />
                <Inputs {...this.props} name={'column'} type={'inputs'} text={'column'} default={this.props.column} />
            </div>
        );
    }
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

        let options = [];
        for(let i in this.props.options) {
            options.push(<option value={this.props.options[i]}>{this.props.options[i]}</option>)
        }

        return (
            <div className={"inputs-box"}>
            {(() => {
                if(this.props.type === 'inputs') {
                    return (
                        <div className={"inputs"}>
                            <label for="">{this.props.text}</label>
                            <input type="number" value={this.props.default} onChange={(event) => this.onChange(this.props.name, event)} />
                        </div>
                    );
                }
            })()}
            {(() => {
                if(this.props.type === 'selects') {
                    return (
                        <div className={"inputs"}>
                            <label for="">{this.props.text}</label>
                            <select onChange={(event) => this.onChange(this.props.name, event)}>
                                {options}
                            </select>
                        </div>
                    );
                }
            })()}
            </div>
        )
    }
}
