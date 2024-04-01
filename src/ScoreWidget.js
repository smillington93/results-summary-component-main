import React, { Component } from 'react';
import './ScoreWidget.css'

function setTextColour(colour){
    return `${colour}-text`
}

function setBackgroundColour(colour){
    return `${colour}-background`
}


class ScoreWidget extends Component {

    state = {  } 
    render() { 
        
    let widgetContainerClass = "widget-container "
    widgetContainerClass += setBackgroundColour(this.props.colour);

    let categoryNameClass = "label-container "
    categoryNameClass += setTextColour(this.props.colour);
        return (
            <div className={widgetContainerClass} >
                <div className={categoryNameClass}>
                {this.props.icon}
                    <div className='label-text'>{this.props.category}</div>
                </div>
                <div className='label-container'>
                <div className='user-score'>{this.props.score}</div>
               <div className='total-label'>/</div>
               <div className='total-label total-text'>100</div>
               </div>
            </div>
        );
    }
}
 
export default ScoreWidget;