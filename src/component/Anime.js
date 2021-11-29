
import CarA from "./Card_anime";

import '../component/watch.css';
function Anime({Animes,setAnimes,search,searchRate}){
   
   
   
    return(
        
            
        <div className="type">
              
        {
        Animes.filter(el => el.name.toUpperCase().includes(search.toUpperCase().trim()) && el.rate>=searchRate).map(anime=><div className="type2"><CarA anime={anime} Animes={Animes}  setAnimes={setAnimes} searchRate={searchRate}/></div>)
        }
    </div>
   
           

            

    );
}
export default Anime;