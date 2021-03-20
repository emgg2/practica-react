import logo from './logo.svg';
import './App.css';
import { ProductPage } from './components/products';
import Button from './components/shared/Button';
import LoginPage from './components/auth/LoginPage/LoginPage';


function App() {
  return (
    <div className="App">      
      
     
        <LoginPage />
        {/* <ProductPage /> */}
       
     
    </div>
  );
}

export default App;
