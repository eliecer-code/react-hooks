import UserData from "./components/Form/UserData/UserData"
import FormComplete from "./components/FormComplete/FormComplete"
import { ImageSpace, MainSpace, FormSpace } from "./components/Styles/Styles"
function App() {

  return (
    <MainSpace>
      <ImageSpace />
      <FormSpace>
        <FormComplete />
      </FormSpace>
    </MainSpace>



  )
}

export default App