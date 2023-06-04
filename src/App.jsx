// import UserData from "./components/Form/UserData/UserData"
import FormComplete from "./components/FormComplete/FormComplete"
import { ImageSpace, MainSpace, FormSpace } from "./components/Styles/Styles"
import Button from '@mui/material/Button'
import { CounterContext } from "./context"
import { useContext } from "react"

function App() {
  const counterData = useContext(CounterContext);
  return (
    <MainSpace>
      <ImageSpace />
      <FormSpace>
        <FormComplete />
        <div>
          <Button onClick={counterData.resta}>-</Button>
          <Button onClick={counterData.suma}>+</Button>
        </div>
      </FormSpace>
    </MainSpace>
  )
}

export default App