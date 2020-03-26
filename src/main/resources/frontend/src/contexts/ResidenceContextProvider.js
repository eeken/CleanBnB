import React, { createContext, useState, useEffect } from 'react'

export const ResidenceContext = createContext();

export default function ResidenceContextProvider(props) {
  const [residences, setResidences] = useState(null)
  const [residenceDetails, setResidenceDetails] = useState('')

  const fetchResidence = async () => {
    let res = await fetch('/rest/residences')
    try {
      res = await res.json()
      setResidences(res)
      console.log(res)
    }
    catch {
      console.log('Not authenticated')
    }
  }

    const fetchResidenceDetails = async (id) => {
    let res = await fetch("/rest/residences/" + id);
    res = await res.json();
    setResidenceDetails(res);
  };

  useEffect(() => {
    fetchResidence()
  }, [])

  const values = {
    residences,
    fetchResidence,
    setResidences,
    residenceDetails,
    setResidenceDetails,
    fetchResidenceDetails
  }
  
  return (
    <ResidenceContext.Provider value={values}>
      {props.children}
    </ResidenceContext.Provider>


  )

}