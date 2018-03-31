import React from 'react';

const Text = (props) => {
    return (
        <div className={props.className}>
            <span style={{
                fontSize: props.fontSize * Math.pow( props.metalRatioToUse, props. magnification),
                lineHeight: props.metalRatioToUse }}>
                { props.text }
            </span>
            <span className="title-label">{ (props.fontSize * Math.pow( props.metalRatioToUse, props. magnification)).toFixed([3]) }px</span>
            <span className="scale-label">x{ props. magnification }</span>
        </div>
    );
}

const TextLayer = (props) => {
    return (
        <div className="text-layer" style={ {paddingLeft: props.data.lineHeight, paddingRight: props.data.lineHeight} }>
            <Text {...props} magnification={'4'} text={"Hi,Designers."} />
            <Text {...props} magnification={'0'} className={"text"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est} laborum."} />
            <Text {...props} magnification={'3'} className={"title"} text={"Change Parameters."} />
            <Text {...props} magnification={'0'} className={"text"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. laborum."} />
            <Text {...props} magnification={'2'} className={"title"} text={"title text"} />
            <Text {...props} magnification={'0'} className={"text"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. laborum."} />
            <Text {...props} magnification={'1'} className={"title"} text={"title text"} />
            <Text {...props} magnification={'0'} className={"text"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est} laborum."} />
            <Text {...props} text={"title text"} />
        </div>
    );
}

export { Text, TextLayer };
