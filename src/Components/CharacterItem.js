import React from 'react';
import "./CharacterItem.css"


const CharacterItem=({image,name,status,species,gender,origin,originDetails,location,locationDetails,filteredChapters})=>{



return(
    

<React.Fragment>
<div className="card"  style={{width: "20rem", margin:"5rem",textAlign:"center"}}>
  <img src={image} className="card-img-top" alt={name}/>
  <div className="card-body">
    {/* PROFILE DETAILS */}
    {/* NAME */}
    <h2 className="card-text">{name}</h2> 
    {/* STATUS - Alive, Dead, Unknown       */}
    <h4 className="card-text">{status} </h4>    
    {/* SPECIES - Human ,Alien           GENDER - Male, Female */}
    <h4 className='card-text'>{species} - {gender}</h4>
    
    {/*ORIGIN*/}
    <h5 >Origin:</h5>
    <span className='card-text'>Name: {origin.name}</span>
    <div className='card-text'>{originDetails.map(location=>{return <ul className='location__item'><li>Type: {location.type}</li> <li>Dimension: {location.dimension} </li><li>Total Residents: {location.residents.length}</li></ul>})}</div>
    
    {/*CURRENT LOCATION*/}
    <h5 >Current Location:</h5>
    <span className='card-text'>{location.name}</span>
    <div className='card-text'>{locationDetails.map(location=>{return <ul className='location__item'><li>Type: {location.type}</li> <li>Dimension: {location.dimension} </li><li>Total Residents: {location.residents.length}</li></ul>})}</div>

    {/*EPISODE LIST*/}
    {/*If episode length is zero, no episode found is displayed */}
    <h5>Episodes</h5>
    {filteredChapters.length?(<ul className='card-text'>{filteredChapters.map(chapter=>{return <li className='chapter__item'>{chapter.name}</li>})}</ul>):<span>No Episode Found!</span>}
    

  </div>
</div>
</React.Fragment>
)
}

export default CharacterItem;