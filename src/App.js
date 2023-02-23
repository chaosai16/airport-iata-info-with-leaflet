import Flight from "./components/Flight"
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Maps from "./components/Maps"
import Airport from "./components/Airport";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <Main/>
      <Flight/>
      <Maps/>
      <Airport/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<div><Navbar/><Main/><Flight/><Maps/><Footer/></div>}/>
        <Route path="/docs" element={<div><Navbar/><Airport/></div>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;