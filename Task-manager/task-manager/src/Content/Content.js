import React from 'react';
import './ContentStyle.css';
import Workcard from "../WorkCard/Workcard";

function Content() {
    return (<>
        <div className="hexagon"><Workcard /></div>
        <div className="hexagon"><Workcard /></div>
        <div className="hexagon"><Workcard /></div>
        <div className="hexagon"><Workcard /></div>
        </>
    );
}

export default Content;