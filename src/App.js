import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Home from './components/Home';
function App() {
     useEffect(() => {
        
     }, [])
     let isisLoggegIn = sessionStorage.getItem('isLoggegIn')
     
  return (
    <div className="App">
     <Header/>
     {
          isisLoggegIn  === 'true' ?  <Home/> : <Login/>
     }
    
     <Footer/>
    </div>
  );
}

export default App;
