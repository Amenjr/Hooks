import { useState } from 'react';
import batman from './film/batman.png';
import forest from './film/forest.jpg';
import inter from './film/inter.jpg';
import joker from './film/joker.jpg';
import shawshank from './film/shawshank.jpg';
import ring from './film/the ring.jpg';
import silence from './film/the silence.jpg';
import one from './anime/one piece.jpg';
import Kimetsu from './anime/kimetsu.jpg';
import death from './anime/death note.jpg';
import jujutsu from './anime/jujutsu-kaisen-OL10.jpg';
import Attack from './anime/attack.jpg';
import promised from './anime/the promised.jpg';
import Navv from './component/Navbar.js';
import Film from './component/Film.js';
import Serie from './component/Serie.js';
import Anime from './component/Anime.js';
import Home from './component/Home.js';
import got from './serie/got.jpg';
import bd from './serie/bd.jpg';
import pk from './serie/pk.jpg';
import pb from './serie/pb.jpg';
import robot from './serie/Mr_Robot.jpg';
import banshee from './serie/banshee.jpg';
import './App.css';

function App() {
 const [state,setstate]=useState({showHome:true,showFilm:false,showSerie:false,showAnime:false})

 const [movies,setMovies]=useState([{id:0,name:'Batman the dark night',image:batman,rate:'9'},
  {id:1,name:'Forest gump',image:forest,rate:'8'},{id:3,name:'Joker',image:joker,rate:'8'}, {id:2,name:'Interstellar',image:inter,rate:'8'},{id:4,name:'The Shawshank redmption',image:shawshank,rate:'10'},
  {id:5,name:'The Ring',image:ring,rate:'7'},{id:6,name:'The Silence of The Lambs',image:silence,rate:'9'}])

  const [Animes,setAnimes]=useState([{id:0,name:'One Piece',image:one,rate:'9'},{id:1,name:'Kimetsu no yaiba',image:Kimetsu,rate:'8'},
    {id:2,name:'Death Note',image:death,rate:'10'},{id:3,name:'jujutsu-kaisen',image:jujutsu,rate:'8'},
    {id:4,name:'Attack On Titan',image:Attack,rate:'9'},{id:5,name:'The Promised Neverland',image:promised,rate:'7'}]);

  const [Series,setSeries] = useState ([{id:0,name:'Game of Thrones',image:got,rate:'10'},{id:1,name:'breaking bad',image:bd,rate:'10'},
    {id:2,name:'Peaky Blindres',image:pk,rate:'8'},{id:3,name:'Prison Break',image:pb,rate:'9'},
    {id:4,name:'Mr Robot',image:robot,rate:'8'},{id:5,name:'Banshee',image:banshee,rate:'7'}]);
    
  
 
  
  const ShowHomes=()=>setstate({showHome:state.showHome=true,showFilm:state.showFilm=false,showSerie:state.showSerie=false,showAnime:state.showAnime=false})
  const ShowFilms=()=>setstate({showHome:state.showHome=false,showFilm:state.showFilm=!state.showFilm,showSerie:state.showSerie=false,showAnime:state.showAnime=false})
  const ShowSeries=()=>setstate({showHome:state.showHome=false,showFilm:state.showFilm=false,showSerie:state.showSerie=!state.showSerie,showAnime:state.showAnime=false})
  const ShowAnimes=()=>setstate({showHome:state.showHome=false,showFilm:state.showFilm=false,showSerie:state.showSerie=false,showAnime:state.showAnime=!state.showAnime})
  const [search,setSearch] = useState("");
  const [searchRate,setSearchrate]=useState("");
  return (
    <div className="App">
      <Navv ShowHomes={ShowHomes} ShowFilms={ShowFilms} ShowSeries={ShowSeries} ShowAnimes={ShowAnimes} search={search} setSearch={setSearch} setSearchrate={setSearchrate} searchRate={searchRate} setMovies={setMovies} movies={movies} Animes={Animes} setAnimes={setAnimes} Series={Series} setSeries={setSeries}></Navv>
      { state.showHome ? <Home/>: null}
      { state.showFilm  ? <Film   search={search}  setSearch={setSearch} searchRate={searchRate} setSearchrate={setSearchrate} movies={movies} setMovies={setMovies}/> : null }
      { state.showSerie ? <Serie search={search}  setSearch={setSearch} searchRate={searchRate} setSearchrate={setSearchrate} Series={Series} setSeries={setSeries}/> : null}
      { state.showAnime ? <Anime search={search}  setSearch={setSearch} searchRate={searchRate} setSearchrate={setSearchrate} Animes={Animes} setAnimes={setAnimes}/> : null}
      
    </div>
  );
}

export default App;
