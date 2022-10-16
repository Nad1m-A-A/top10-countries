import MainContextProvider from "./context/MainContextProvider";

import Header from "./components/Header";
import Navigator from "./components/Navigator";
import Main from "./components/Main";
import Modal from "./components/Modal";
import Footer from '../src/components/Footer';
import { useContext } from "react";
import MainContext from "./context/main-context";


function AppWrapper() {
  return (
    <MainContextProvider>
      <App/>
    </MainContextProvider>
  )
} // maybe there is no need for app wrapper

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
