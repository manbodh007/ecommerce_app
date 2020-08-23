import React from 'react';
import '../App.css';
import Navbar from './Navbar';
import Product from './Product';



class App extends React.Component{
  render(){
    return (
      <div>
       <Navbar/>
       <Product/> 
      </div>
    );
  }
}

export default App;
