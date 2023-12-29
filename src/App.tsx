import { Stack } from "@mui/material"
import CalculatorDisplay from "./components/CalculatorDisplay"
import { CalculatorKeys } from "./components/CalculatorKeys"
import { useState } from "react"
import Operation from "./enums/Operation"

const App = () => {
  const [display, setDisplay] = useState("0")
  const [operator, setOperator] = useState(Operation.NONE)
  const [value, setValue] = useState(0)
  const [hasDecimal, setHasDecimal] = useState(false)

  const addNumber = (number: number) => {
    if (display === "0") {
      setDisplay(number.toString())
    } else {
      setDisplay(display + number.toString())
    }
  }

  const addOperator = (operator: Operation) => {
    if (operator !== Operation.NONE && display === "0") {
      setOperator(operator)
      return
    }
    setOperator(operator)
    setValue(parseFloat(display))
    setDisplay("0")
    setHasDecimal(false)
  }

  const addDecimal = () => {
    if (!hasDecimal) {
      setDisplay(display + '.')
      setHasDecimal(true)
    }
  }

  const calculate = () => {
    switch (operator) {
      case Operation.ADD:
        setDisplay((value + parseFloat(display)).toString())
        break
      case Operation.SUBTRACT:
        setDisplay((value - parseFloat(display)).toString())
        break
      case Operation.MULTIPLY:
        setDisplay((value * parseFloat(display)).toString())
        break
      case Operation.DIVIDE:
        setDisplay((value / parseFloat(display)).toString())
        break
      default:
        break
    }
    setOperator(Operation.NONE)
    setValue(0)
    setHasDecimal(false)
  }

  const reset = () => {
    setDisplay("0")
    setOperator(Operation.NONE)
    setValue(0)
    setHasDecimal(false)
  }

  return (
    <Stack borderColor={"red"} border={2} width={"30vw"} p={2} spacing={1} bgcolor={"#000"}>
      <CalculatorDisplay display={display}/>
      <CalculatorKeys
        addNumber={addNumber}
        addOperator={addOperator}
        addDecimal={addDecimal}
        calculate={calculate}
        reset={reset}
      />
    </Stack>
  )
}

export default App
