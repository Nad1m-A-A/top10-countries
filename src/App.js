import MainContextProvider from "./context/MainContextProvider";
import { useContext } from "react";
import MainContext from "./context/main-context";

import Header from "./components/Header";

function App() {
  const CTX = useContext(MainContext);

  return (
    <div>
      <Header/>
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
