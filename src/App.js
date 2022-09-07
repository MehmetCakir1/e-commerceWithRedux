import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Provider } from 'react-redux';
import { getStore } from './redux';
import Home from './pages/Home';
import { ToastContainer } from "react-toastify";
import AppRouter from "./router/AppRouter"

function App() {
  const store = getStore();
  return (
    <div className="app">
      <Provider store={store}>
        <AppRouter>
          <ToastContainer/>
          <Home />
        </AppRouter>
      </Provider>
    </div>
  );
}

export default App