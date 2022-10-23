import Field from './field/Field'
import MainContext from "../context/main-context"
import { useContext } from "react"
import MainMessage from "./main-message/MainMessage";

function Main() {
    const CTX = useContext(MainContext);
    const showFiller = CTX.loading || CTX.activeAspect.length === 0;
    
    return (
      <div>
          {showFiller && <MainMessage message={CTX.loading ? 'Loading...' : 'No Aspect Chosen, Pick One!'}/>}
          {!showFiller && <Field/>}
      </div>
    )
}

export default Main;