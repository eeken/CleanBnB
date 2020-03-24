import React from 'react';
import ResidenceCard from '../components/ResidenceCard'
function LandingPage() {
    return (
        <div className="container white">
            <div className="white mb-4" style={{borderRadius: '5px'}}>
                <h1 className="golden"> Explore </h1>
            </div>
                <ResidenceCard />
        </div>
    )
}

export default LandingPage;
