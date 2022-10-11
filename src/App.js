
import './App.css';
import NavigationBar from './Components/NavigationBar';
import Intro from './Components/Intro';
import Trending from './Components/Trending'
import "./Style/Landingpage.css";
function App() {
  return (
    <div>
      {/* intro */}

      <div className="myBG">
      <NavigationBar/>
      <Intro/>
      
    </div>
    {/* end of Intro*/}

    {/*trending*/}
    <div className='Trending'>
      <Trending/>
      
    </div>
    {/*end of trending*/}
    </div>
  )
}

export default App;
