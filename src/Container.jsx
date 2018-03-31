import React from 'react';
import { RATIO } from './const.jsx';
import { SideBar, InputfontSize, InputLineHeight } from './SideBar.jsx';
import { HorizontalGrid, HorizontalGridLayer } from './HorizontalGridLayer.jsx';
import { VerticalGrid, VerticalGridLayer } from './VerticalGridLayer.jsx';
import { Text, TextLayer } from './TextLayer.jsx';



/**
 * Container
 * ParentContainerから設定値を取得。計算処理のフィルタリングを行い、コンポーネントに引き渡す。。
 */


export class Container extends React.Component {
    constructor(props) {
        super(props);
        this.data = {
            lineHeight: this._outputLineHeight(this.props.fontSize, this.props.metalRatioToUse)
        }
        this._outputLineHeight = this._outputLineHeight.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.data.lineHeight = this._outputLineHeight(nextProps.fontSize, nextProps.metalRatioToUse);
    }

    _outputLineHeight(fontSize, calculationRatio) {
        return Number(fontSize) * Number(calculationRatio);
    }

    render() {
        return (
            <div className="container">
                <SideBar { ...this.props } data={ this.data } />
                <div className="contents">
                    <VerticalGridLayer { ...this.props } data={ this.data } />
                    <div className={'block-base'} style={ {width: this.props.containerWidth + 'px'} }>
                        <HorizontalGridLayer { ...this.props } data={ this.data } />
                        <TextLayer { ...this.props } data={ this.data } />
                    </div>
                </div>
            </div>
        );
    }
}
