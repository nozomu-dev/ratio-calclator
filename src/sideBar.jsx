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
                <Inputs {...this.props} name={'ratio'} text={'ratio'} type={'selects'} update={this.props.update} updateLineHeight={this.props.updateLineHeight} options={['Gold Ratio', 'Silver Ratio', 'Platinum Ratio']}/>
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
        this.calcLineHeight = this.calcLineHeight.bind(this);
    }

    onChange(label, event) {

        const newState = {};
        newState[label] = event.target.value;

        if(label === 'ratio') {
            if(newState[label] === 'Gold Ratio') {
                this.props.update({ 'calculationRatio': RATIO.RATIO_GOLD });
                this.props.updateLineHeight(this.props.fontSize, RATIO.RATIO_GOLD);
            }else if(newState[label] === 'Silver Ratio') {
                this.props.update({ 'calculationRatio': RATIO.RATIO_SILVER });
                this.props.updateLineHeight(this.props.fontSize, RATIO.RATIO_SILVER);
            }else if(newState[label] === 'Platinum Ratio') {
                this.props.update({ 'calculationRatio': RATIO.RATIO_PLATINUM });
                this.props.updateLineHeight(this.props.fontSize, RATIO.RATIO_PLATINUM);
            }
        } else if(label === 'fontSize') {
            this.props.update(newState);
            this.props.updateLineHeight(newState[label], this.props.calculationRatio);
        }else {
            this.props.update(newState);
            this.props.updateLineHeight(this.props.fontSize, this.props.calculationRatio);
        }
    }

    calcLineHeight() {
        let lineHeight = this.props.methodOfLineHeight == 'ratio' ? Number(this.props.fontSize) * Number(this.props.calculationRatio) : Number(this.props.fontSize) * Number(this.props.methodOfLineHeight);
        this.props.update({'lineHeight': lineHeight});
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
