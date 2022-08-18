import React from 'react';




import CharacterItem from './CharacterItem';
const CharacterList = ({characters,chapters,locations}) => {

const filteredChapter=(id)=>{
  return chapters.results.filter(chapter=>chapter.characters.includes(`https://rickandmortyapi.com/api/character/${id}`))
}

const filteredLocation=(location)=>{
  return locations.results.filter(locationArray=>locationArray.name.toLowerCase()===location.name.toLowerCase())
}
  

  return (

    <React.Fragment>
    
      <div className='card-group'>
        <div className='row'>
        {characters.results.map(character=>(
            <CharacterItem
            name={character.name}
            image={character.image}
            gender={character.gender}
            status={character.status}
            species={character.species}
            origin={character.origin}
            originDetails={filteredLocation(character.origin)}
            location={character.location}
            locationDetails={filteredLocation(character.location)}
            filteredChapters={filteredChapter(character.id)}
            />

        ))}
        </div>
</div>
</React.Fragment>
  );
};

export default CharacterList;




