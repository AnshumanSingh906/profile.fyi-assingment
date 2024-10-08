import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import CartPage from './pages/CartPage';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/app/*" element={<App />} />
          <Route path="/cart-item" element={<CartPage />} />
          <Route path="*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </PersistGate>

  </Provider>
);
