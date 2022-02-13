import React from 'react';
import './topnavbar.css';

const Topnavbar = (props) => (
    <div className="topnav">
        { Object.keys(props).map(prop => (<a key={prop} href={props[prop]}>{prop}</a>)) }
    </div>
)

export default Topnavbar;