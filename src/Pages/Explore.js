import React from 'react';
import ResidenceCard from '../components/ResidenceCard'
function LandingPage() {
    return (
        <div className="container">
            <div className="p-4">
                <div className="row white offset-2 mb-4" style={{borderRadius: '5px', width:'50vw'}}>
                    <p className="golden" style={{fontSize:'1em'}}> Search </p>
                </div>
            </div>
            <div className="col white" style={{height:'75vh', borderRadius:'5px'}}>
                <ResidenceCard />
            </div>
        </div>
    )
}

export default LandingPage;
