import MainContextProvider from "./context/MainContextProvider";

import Header from "./components/header/Header";
import Navigator from "./components/navigator/Navigator";
import Main from "./components/Main";
import Modal from "./components/modal/Modal";
import Footer from './components/footer/Footer';
import { useContext } from "react";
import MainContext from "./context/main-context";


function AppWrapper() {
  return (
    <MainContextProvider>
      <App/>
    </MainContextProvider>
  )
}

function App() {
  const CTX = useContext(MainContext);

  return (
        <div>
          <Header/>
          <div className="container">
          <Navigator/>
          <Main/>
          <Modal content={CTX.error}>
          </Modal>
          </div>
          <Footer/>
      </div>
  );
}

export default AppWrapper;
