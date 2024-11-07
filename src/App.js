import './App.css';
import Header from '../src/Components/FixedUI/Header/Header.jsx'
import Main from '../src/Components/Containers/Main/Main.jsx'
import Back from '../src/Components/Containers/BackImage/back.jsx'
import Partner from '../src/Components/Containers/Partner/Partner.jsx'
import Library from '../src/Components/Containers/library/library.jsx'
import Exp from '../src/Components/Containers/Exp/Exp.jsx'
import BlackBackGround from '../src/Components/Containers/BlackBackGround/BlackBackGround.jsx'
import Integrate from '../src/Components/Containers/Integrate/Integrate.jsx'
import BlueContainer from "../src/Components/Containers/BlueContainer/BlueContainer.jsx"
function App() {
  return (
    <div className="App">
      <Header />
      <Main/>
      <Back/>
      <Partner />
      <Library />
      <Exp />
      <Integrate/>
      <BlackBackGround />
      <BlueContainer/>
    </div>
  );
}

export default App;
