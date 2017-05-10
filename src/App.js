import React, {Component} from 'react';

import ProductList from './components/product/ProductList';


import './App.scss';
// import styles from './Modules.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="container">
           <ProductList />
        </div>

        

      </div>
    )
  }
}

export default App;
