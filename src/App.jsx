import classes from './assets/styles/Main.module.css'
import MainContextProvider from "./context/MainContextProvider";
import { useContext } from "react";
import MainContext from "./context/main-context";
import Header from "./components/Header";
import Navigator from "./components/navigator/Navigator";
import Main from './components/main/Main';
import Footer from './components/Footer';

function App() {
  const CTX = useContext(MainContext);

  return (
    <div>
      <Header/>
      <div className={classes.container}>
        <Navigator/>
        <Main/>
        {/* <Modal content={CTX.error}/> */}
      </div>
      <Footer/>
    </div>
  );
}

function AppWrapper() {
  return (
    <MainContextProvider>
      <App/>
    </MainContextProvider>
  )
}

export default AppWrapper;
