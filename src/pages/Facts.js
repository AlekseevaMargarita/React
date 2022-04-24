import React from 'react';
import '../App.scss';
import FactList from '../components/FactList';

const Facts = () => {

    return (
        <div className="facts">
            <h1>Daily cat facts!</h1>
            <FactList />
        </div>

    )
};

export default Facts;