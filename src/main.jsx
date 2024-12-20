import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import {store , persistor} from './store/index.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <Provider store={store} >
     <PersistGate loading={null} persistor={persistor}>
   <BrowserRouter>
      <App />
    </BrowserRouter>
    </PersistGate>
    </Provider>
)
