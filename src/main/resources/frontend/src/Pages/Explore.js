import React from "react";
import ResidenceCard from "../components/ResidenceCard";

export default function Explore() {
  
   return (
      <div>
        <div className="white m-4 searchBar"> Click here to search... </div>

        <div className="col-12 white">
          <div className="whiteBackground p-4">
            <ul>
              <ResidenceCard></ResidenceCard>
            </ul>
          </div>
        </div>
      </div>
      );
     
  }

      



var listOfResidences = [
  {
    title: "This cool house",
    maxGuests: 2,
    numberOfBeds: 1,
    numberOfRooms: 1,
    pricePerNight: 350,
    image:
      "https://trello-attachments.s3.amazonaws.com/5e72335a446b9a02131a23d2/300x203/8e46d3767ee9be9ec8d2d28605a1a808/residence5.jpg"
  },
  {
    title: "This other cool house",
    maxGuests: 8,
    numberOfBeds: 8,
    numberOfRooms: 10,
    pricePerNight: 1200,
    image:
      "https://trello-attachments.s3.amazonaws.com/5e72335a446b9a02131a23d2/300x203/8e46d3767ee9be9ec8d2d28605a1a808/residence5.jpg"
  },
  {
    title: "Yet another cool house",
    maxGuests: 5,
    numberOfBeds: 5,
    numberOfRooms: 4,
    pricePerNight: 545,
    image:
      "https://trello-attachments.s3.amazonaws.com/5e72335a446b9a02131a23d2/300x203/8e46d3767ee9be9ec8d2d28605a1a808/residence5.jpg"
  },
  {
    title: "Last cool house",
    maxGuests: 3,
    numberOfBeds: 3,
    numberOfRooms: 4,
    pricePerNight: 650,
    image:
      "https://trello-attachments.s3.amazonaws.com/5e72335a446b9a02131a23d2/300x203/8e46d3767ee9be9ec8d2d28605a1a808/residence5.jpg"
  }
]; 
