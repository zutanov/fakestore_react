
import './App.scss';
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom'
import { HomePage } from './components/HomePage';
import { Cart } from './components/Cart';
import { Search } from './components/Search';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Auth } from './components/Auth';
import store from './store/store';
import { logOut } from './store/actionCreators/auth';

const App = () => {
  
  const cart = useSelector(store => store?.cartReducer?.cart)
  const [auth, setAuth] = useState(false)
  
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setAuth(true)
    }
  }, [])

  const counter = (cart) => {
    if (cart.length) {
      return cart.reduce((acc,rec) => {
        return acc + rec.count
      }, 0)
    }
  }

  const handleLogout = () => {
    store.dispatch(logOut())
    setAuth(false)
  }

  if (auth) {
    return (
      <div className="App">
        <Router>
          {/* <header>
    <nav>
      <div class="">
        <div class="flex justify-between h-16 px-10 shadow items-center">
          <div class="flex items-center space-x-8">
            <h1 class="text-xl lg:text-2xl font-bold cursor-pointer">Tailwind</h1>
            <div class="hidden md:flex justify-around space-x-4">
              <a href="#" classN="hover:text-indigo-600 text-gray-700">Home</a>
              <a href="#" class="hover:text-indigo-600 text-gray-700">About</a>
              <a href="#" class="hover:text-indigo-600 text-gray-700">Service</a>
              <a href="#" class="hover:text-indigo-600 text-gray-700">Contact</a>
            </div>
          </div>
          <div class="flex space-x-4 items-center">
            <a href="#" class="text-gray-800 text-sm">LOGIN</a>
            <a href="#" class="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">SIGNUP</a>
          </div>
        </div>
      </div>
    </nav>
    <div class="h-screen bg-gray-100 flex justify-center">
      <div class="py-6 px-8 h-80 mt-20 bg-white rounded shadow-xl">
        <form action="">
          <div class="mb-6">
            <label for="name" class="block text-gray-800 font-bold">Name:</label>
            <input type="text" name="name" id="name" placeholder="username" class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
          </div>
  
          <div>
            <label for="email" class="block text-gray-800 font-bold">Email:</label>
            <input type="text" name="email" id="email" placeholder="@email" class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
  
            <a href="#" class="text-sm font-thin text-gray-800 hover:underline mt-2 inline-block hover:text-indigo-600">Forget Password</a>
          </div>
          <butt class="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">Login</butt>
        </form>
      </div>
    </div>
  </header> */}
        <header className='header'>
          <div className='container header__container'>
            <h2 className='header__logo'>Logo</h2>
            <nav className='header__nav'>
            <NavLink to='/' className='header__link'>Home</NavLink>
            <NavLink to='/cart' className='header__link'>Cart {counter(cart)}</NavLink>
            <NavLink to="/search" className='header__link'>Search</NavLink>
            <button onClick={handleLogout} className='header__link'>Logout</button>
            
            </nav>
          </div>
        </header>
            <Routes>
              <Route path='/' element={<HomePage/>} />
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/search' element={<Search/>}/>
            </Routes>
        </Router>
  
  
      </div>
    );
  } else {
    return (
      <Auth setAuth={setAuth}/>
    )
  }

 
}

export default App;
