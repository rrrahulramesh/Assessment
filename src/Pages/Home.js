import React, { useEffect, useState, useCallback } from 'react';
import CharacterList from '../Components/CharacterList';
import { useHttpClient } from '../hooks/http-hook';

const Home = () => {
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const [loadedCharacters,setLoadedCharacters]=useState();
    const [loadedChapters,setLoadedChapters]=useState();
    const [loadedLocations,setLoadedLocations]=useState();
    const {isLoading,error,sendRequest}=useHttpClient();
   const loader = useRef(null);
  
   
  
 useEffect(()=>{
        const option = {
            root: null,
            rootMargin: "20px",
            threshold: 0
          };
          const observer = new IntersectionObserver(handleObserver, option);
          if (loader.current) observer.observe(loader.current);

        const fetchCharacters=async()=>{
            try{
               {/*Calling three APIs at once using custom http-hook written using fetch*/}
                const responseData=await Promise.all([
                    sendRequest(
                        `${process.env.REACT_APP_BACKEND_URL}/character`,
                        "GET",
                        null,
                       
                    ),
                    sendRequest(
                        `${process.env.REACT_APP_BACKEND_URL}/episode`,
                        "GET",
                        null,
                       
                    ),
                    sendRequest(
                        `${process.env.REACT_APP_BACKEND_URL}/location`,
                        "GET",
                        null,
                       
                    ),

                ]) 
                {/*Loading response data from the APIs*/}
                setLoadedCharacters(responseData[0]);
                setLoadedChapters(responseData[1]);
                setLoadedLocations(responseData[2])
            } catch (err) {}
                
            
        };
        fetchCharacters();
    },[sendRequest,handleObserver]);

    return (
        <React.Fragment>
            {/*When data has been fetched and all the fetched data are not null, then only the component renders*/}
        {!isLoading && (loadedCharacters && loadedChapters && loadedLocations) &&
            <CharacterList
              characters={loadedCharacters}
              chapters={loadedChapters}
              locations={loadedLocations}
            />

        }
        {isLoading && <p>Loading...</p>}
        {error && <p>Error!</p>}
            <div ref={loader} />
        </React.Fragment>
      );
}
 
export default Home;