import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Nav } from './components/Nav/Nav';
import { ItemListContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext/CartProvider';


function App() {
  

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Nav /> // va por fuera del Routes para no volver a renderizarlo
        
          <Routes>
              <Route
                path="/"
                element={<ItemListContainer titulo={"Bienvenidos"} />}
              />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
          </Routes>  
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
