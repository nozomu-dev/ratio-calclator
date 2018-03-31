import React from 'react';

const Text = (props) => {
    return (
        <div className={props.className}>
            <textarea rows="1" style={{
                fontSize: props.fontSize * Math.pow( props.metalRatioToUse, props. magnification),
                lineHeight: props.metalRatioToUse }} defaultValue={ props.text }>
            </textarea>
            <span className="title-label" style={{marginLeft: props.data.lineHeight * 2}}>{ (props.fontSize * Math.pow( props.metalRatioToUse, props. magnification)).toFixed([3]) }px</span>
            <span className="scale-label" style={{marginLeft: props.data.lineHeight}}>x{ props. magnification }</span>
        </div>
    );
}

class TextLayer extends React.Component {
    constructor(props) {
        super(props);
        this._resizeTextArea = this._resizeTextArea.bind(this);
    }

    _resizeTextArea() {
        let textArea = document.getElementsByTagName('textarea');
        for(let i=0; i < textArea.length; i++) {
            textArea[i].style.height = 0;
            let textContentHeight = textArea[i].scrollHeight;
            console.log(textContentHeight)
            textArea[i].style.height = textContentHeight + 'px';
        }
    }
    componentDidMount() {
        this._resizeTextArea();
    }
    componentDidUpdate() {
        this._resizeTextArea();
    }
    render() {
        return (
            <div className="text-layer" style={ {paddingLeft: this.props.data.lineHeight, paddingRight: this.props.data.lineHeight} }>
                <Text {...this.props} magnification={'4'} className={"title"} text={"Hi,Designers"} />
                <Text {...this.props} magnification={'0'} className={"text"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est} laborum."} />
                <Text {...this.props} magnification={'3'} className={"title"} text={"Change Parameters"} />
                <Text {...this.props} magnification={'0'} className={"text"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. laborum."} />
                <Text {...this.props} magnification={'2'} className={"title"} text={"title text"} />
                <Text {...this.props} magnification={'0'} className={"text"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. laborum."} />
                <Text {...this.props} magnification={'1'} className={"title"} text={"title text"} />
                <Text {...this.props} magnification={'0'} className={"text"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est} laborum."} />
                <Text {...this.props} text={"title text"} />
            </div>
        );
    }
}

export { Text, TextLayer };
