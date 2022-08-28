import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './routes';
import MyContext from './context';

function App() {
  const [product, setProduct] = useState({
    name: '',
    imagens: {
      thumbnail: '',
      pictures: []
    },
    category: '',
    preco: 0,
    quantity: 0,
    color: '',
    description: '',
    measurements: {
      weight: 0,
      heigth: 0,
      width: 0,
      depth: 0
    },
    homepage: false
  })

  const store = {
    product,
    setProduct
  }
  return (
    <MyContext.Provider value={ store }>
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
