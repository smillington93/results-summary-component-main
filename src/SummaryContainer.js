import React, { Component } from 'react';
import './SummaryContainer.css'
import ScoreWidget from './ScoreWidget';
import { HiOutlineLightningBolt } from "react-icons/hi";
import { BiBrain } from "react-icons/bi";
import { BiMessageRoundedMinus } from "react-icons/bi";
import { FiEye } from "react-icons/fi";


class SummaryContainer extends Component {
    state = {  } 
    render() { 
        return (
            <div class="summary-container">
                <div class="summary-heading">Summary</div>
                <div class="score-widget-container">
                    <ScoreWidget colour="red" category="Reaction" score="80" icon={<HiOutlineLightningBolt></HiOutlineLightningBolt>}></ScoreWidget>
                    <ScoreWidget colour="yellow" category="Memory" score="92" icon={<BiBrain />}></ScoreWidget>
                    <ScoreWidget colour="green" category="Verbal" score="61" icon={<BiMessageRoundedMinus></BiMessageRoundedMinus>}></ScoreWidget>
                    <ScoreWidget colour="blue" category="Visual" score="72" icon={<FiEye></FiEye>}></ScoreWidget>
               </div>
                <button className='btn' type='button'>Continue</button>
            </div>
        );
    }
}
 
export default SummaryContainer;