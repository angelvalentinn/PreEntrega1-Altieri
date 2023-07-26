import "./styles/app.scss";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {

  return (
    
    <BrowserRouter>

      <NavBar />

      <Routes>
        
        <Route path="/" element={ <ItemListContainer /> } />
        <Route path="/item" element={<ItemDetailContainer />} />
      </Routes>
      
      
    </BrowserRouter>
  
  )

}

export default App;
