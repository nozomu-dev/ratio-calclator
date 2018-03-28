import React from 'react';

const Text = (props) => {
    return (
        <div style={{fontSize: props.size}}>{props.text}<span className="title-label">{props.size}px</span></div>
    );
}

const TextBlock = (props) => {
    return (
        <div>
            <Text size={ props.fontSize * Math.pow( props.culculationRatio, 4 ) } text={"title text"} />
            <Text size={ props.fontSize * Math.pow( props.culculationRatio, 3 ) } text={"title text"} />
            <Text size={ props.fontSize * Math.pow( props.culculationRatio, 2 ) } text={"title text"} />
            <Text size={ props.fontSize * Math.pow( props.culculationRatio, 1 ) } text={"title text"} />
            <Text size={props.fontSize} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est} laborum."} />
            <Text size={props.fontSize / props.culculationRatio } text={"title text"} />
        </div>
    );
}

export { Text, TextBlock };
