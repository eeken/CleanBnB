import React from "react";

export default function Explore() {
    return (
        <div>
            <div className="col-12 white">
                <div className="whiteBackground p-4">
                    <h2 className="searchAndFilterFormTitle golden" align="center">About CleanBNB</h2>
                    <div className="row m-2">
                        <p className="golden aboutCleanBNB p-1 mt-2 mb-4" align="center">CleanBNB is an online marketplace that connects people who want to rent out their homes with people who are looking for accommodations in that locale. It currently covers more than 81,000 cities and 191 countries worldwide. Also, in case you missed it: the company's name comes from "AirBnB”, only we make sure the residences are actually CLEAN.</p>
                    </div>

                    <h4 className="golden mb-4" align="center">Meet the Team</h4>

                    <div className="row">
                        <div className="col-5">
                            <img
                                height="100px"
                                width="auto"
                                src={require('../images/m.jpg')}
                                alt="team"
                            />
                        </div>
                        <div className="col-6">
                            <p className="golden mt-3 mb-0 residenceDetailsTitle">Marcus Sandberg</p>
                            <p className="golden residenceDetailsCommonDetails">Capable of basically everything.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-5">
                            <img
                                height="100px"
                                width="auto"
                                src={require('../images/o.jpg')}
                                alt="team"
                            />
                        </div>
                        <div className="col-6">
                            <p className="golden mt-3 mb-0 residenceDetailsTitle">Ola Wiebe</p>
                            <p className="golden residenceDetailsCommonDetails">Scrum Master Extraordinaire</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-5">
                            <img
                                height="100px"
                                width="auto"
                                src={require('../images/v.jpg')}
                                alt="team"
                            />
                        </div>
                        <div className="col-6">
                            <p className="golden mt-3 mb-0 residenceDetailsTitle">Victor Törnbom</p>
                            <p className="golden residenceDetailsCommonDetails">Technical Engineer Available 24/7</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-5">
                            <img
                                height="100px"
                                width="auto"
                                src={require('../images/p.jpg')}
                                alt="team"
                            />
                        </div>
                        <div className="col-6">
                            <p className="golden mt-3 mb-0 residenceDetailsTitle">Paola Tosca</p>
                            <p className="golden residenceDetailsCommonDetails">Design Lead Extravaganza</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-5">
                            <img
                                height="100px"
                                width="auto"
                                src={require('../images/n.jpg')}
                                alt="team"
                            />
                        </div>
                        <div className="col-6">
                            <p className="golden mt-3 mb-0 residenceDetailsTitle">Naim</p>
                            <p className="golden residenceDetailsCommonDetails">Wild Card</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}
