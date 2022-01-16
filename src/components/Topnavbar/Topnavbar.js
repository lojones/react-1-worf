import React from 'react';
import './topnavbar.css';

const Topnavbar = (props) => (
    <div class="topnav">
        { Object.keys(props).map(prop => (<a href={props[prop]}>{prop}</a>)) }
    </div>
)

export default Topnavbar;