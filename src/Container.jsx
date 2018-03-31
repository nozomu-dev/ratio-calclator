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
            lineHeight: this._outputLineHeight(this.props.fontSize, this.props.metalRatioToUse),
            containerWidth: this.props.containerWidth
        }
        this._outputLineHeight = this._outputLineHeight.bind(this);
        this._attachHtmlFontSize = this._attachHtmlFontSize.bind(this);
    }

    _outputLineHeight(fontSize, metalRatioToUse) {
        return Number(fontSize) * Number(metalRatioToUse);
    }

    _attachHtmlFontSize(fontSize, metalRatioToUse) {
        var html = document.getElementsByTagName('html');
        html[0].style.fontSize = (fontSize * metalRatioToUse) + 'px';
    }

    componentWillReceiveProps(nextProps) {
        this.data.lineHeight = this._outputLineHeight(nextProps.fontSize, nextProps.metalRatioToUse);
        this.data.containerWidth = nextProps.containerWidth > 200 ? nextProps.containerWidth : this.props.containerWidth;
        this._attachHtmlFontSize(nextProps.fontSize, nextProps.metalRatioToUse);
    }

    render() {
        return (
            <div className="container" style={ { fontSize: this.props.fontSize } }>
                <SideBar { ...this.props } data={ this.data } />
                <div className="contents">
                    <VerticalGridLayer { ...this.props } data={ this.data } />
                    <div className={'block-base'} style={ {width: this.data.containerWidth + 'px'} }>
                        <HorizontalGridLayer { ...this.props } data={ this.data } />
                        <TextLayer { ...this.props } data={ this.data } />
                    </div>
                </div>
            </div>
        );
    }
}
