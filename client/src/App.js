import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/AddHotel';
import List from './components/HotelList';
import Posts from './components/Posts';
import Home from './components/Home';

function App() {
  return (
    <>
    <div>
      <Home />
    </div>
    {/* <div>
      <h2>Add a new Hotel</h2>
      <Form />
    </div> */}
    {/* <div>
      <Posts />
    </div> */}
  </>
  );
}

export default App;
