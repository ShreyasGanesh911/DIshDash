import NavBar from './Components/NavBar';
import './App.css';
import './myApp.css'
import AppState from './Context/AppState'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Cart from './Components/Cart';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Footer from './Components/Footer';
import ItemDisplay from './Components/ItemDisplay';
import About from './Components/About';
import OrderPage from './Components/OrderPage';
import Profile from './Components/Profile';
function App() {
  return (
    <>
      <AppState>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route element={<Cart/>} path='/cart' value={Cart}></Route>
          <Route element={<About/>} path='/about'></Route>
          <Route element={<Home/>} path='/'></Route>
          <Route element={<Signup/>} path='/signup'></Route>
          <Route element={<Login/>} path='/login'></Route>
          <Route element={<ItemDisplay/>} path='/menu'></Route>
          <Route element={<OrderPage/>} path="/orders"></Route>
          <Route element={<Profile/>} path="/profile"></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
      </AppState>
    </>
  );
}

export default App;
