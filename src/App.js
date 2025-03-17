import './styles/App.css';
import Headers from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Router from './Router';
import React, { useEffect } from "react";
// import ThemeColor from './ThemeColor';

function App() {

    useEffect(() => {
        window.onbeforeunload = function pushRefresh() {
            window.scrollTo(0, 0);
        };
    }, []);

  return (
    <div className="App">
      {/*/!* <ThemeColor/> *!/*/}
      {/*<Headers/>*/}
      {/*<Body/>*/}
      {/*<Footer/>*/}
        <Router />

    </div>
  );
}

export default App;
