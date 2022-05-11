import { Routes , Route } from 'react-router-dom'
import data from './data/data.json'
import Navbar from './components/Navbar'
import Carts from './pages/carts.jsx' 
import Itemdetail from './pages/ItemDetail' 



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Carts Data={data}/>}/>
        <Route path="cart/:itemId" element={<Itemdetail Data={data} />} />
      </Routes>
    </>
  );
}

export default App;
