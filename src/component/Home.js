
import 'bootstrap/dist/css/bootstrap.min.css';
import game from '../serie/Game of Thrones _ Season 8 _ Official Trailer (HBO).mp4'
import './Home.css';
import Forum from './Form.js'

function Home(){

    return(
        <div className="home">
           <video className="vd"  autoPlay loop>
            <source src={game} type="video/mp4"/>
         
           </video>
           <Forum/>
        </div>

    );
}
export default Home;