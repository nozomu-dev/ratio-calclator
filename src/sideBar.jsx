import React from 'react';
import { RATIO } from './const.jsx';



export class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="sidebar">
                <div>Ratio Calculator</div>
                <Inputs {...this.props} name={'metalRatioToUse'} text={'Metal ratio to use'} type={'selects'} update={this.props.update} options={[RATIO.RATIO_GOLD, RATIO.RATIO_SILVER, RATIO.RATIO_PLATINUM]}/>
                <Inputs {...this.props} name={'fontSize'} text={'base font size'} default={this.props.fontSize} update={this.props.update} type={'inputs'} />
                {/*<Inputs {...this.props} name={'methodOfLineHeight'} text={'line height'} type={'selects'} update={this.props.update} options={['ratio', '1.6', '1.8', '2.0']}/>*/}
                <Inputs {...this.props} name={'containerWidth'} text={'container size'} default={this.props.containerWidth} update={this.props.update} type={'inputs'} />
                <Inputs {...this.props} name={'column'} text={'column'} default={this.props.column} update={this.props.update} type={'inputs'} />
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
            <div>
            {(() => {
                if(this.props.type === 'inputs') {
                    return (
                        <div>
                            <label for="">{this.props.text}</label>
                            <input type="number" value={this.props.default} onChange={(event) => this.onChange(this.props.name, event)} />
                        </div>
                    );
                }
            })()}
            {(() => {
                if(this.props.type === 'selects') {
                    return (
                        <div>
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
