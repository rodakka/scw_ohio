import React, { Component } from 'react';
import HoF from '../img/Hall-Of-Fame.png';
import construction from '../img/under_construction.png'


class HallOfFame extends Component {
    render() {
        return (
            <div className="container text-center d-flex flex-column">
                <img src={HoF} alt="Hall of Fame"/>
                <img src={construction} alt="Under Construction" />
            </div>
        );
    }
}

export default HallOfFame;
