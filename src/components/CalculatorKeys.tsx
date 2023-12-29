import { Button, Container } from "@mui/material";
import React from "react";
import Operation from "../enums/Operation";

interface CalculatorKeysProps {
  addNumber: (number: number) => void
  addOperator: (operator: Operation) => void
  addDecimal: () => void
  calculate: () => void
  reset: () => void
}

export const CalculatorKeys: React.FC<CalculatorKeysProps> =  ({ addNumber, addOperator, addDecimal, calculate, reset}) => {
  return (
    <Container sx={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gridTemplateRows: "repeat(5, 1fr)",
      gap: "0.5rem",
      border: "1px solid black",
      padding: "0.5rem",
    }}>
      <Button color="error" variant="contained" sx={{ gridColumnStart: 4 }} onClick={reset}>C</Button>
      <Button variant="contained" onClick={() => addNumber(7)}>7</Button>
      <Button variant="contained" onClick={() => addNumber(8)}>8</Button>
      <Button variant="contained" onClick={() => addNumber(9)}>9</Button>
      <Button variant="contained" color={"secondary"} onClick={() => addOperator(Operation.DIVIDE)}>/</Button>
      <Button variant="contained" onClick={() => addNumber(4)}>4</Button>
      <Button variant="contained" onClick={() => addNumber(5)}>5</Button>
      <Button variant="contained" onClick={() => addNumber(6)}>6</Button>
      <Button variant="contained" color={"secondary"} onClick={() => addOperator(Operation.MULTIPLY)}>*</Button>
      <Button variant="contained" onClick={() => addNumber(1)}>1</Button>
      <Button variant="contained" onClick={() => addNumber(2)}>2</Button>
      <Button variant="contained" onClick={() => addNumber(3)}>3</Button>
      <Button variant="contained" color={"secondary"}  onClick={() => addOperator(Operation.SUBTRACT)}>-</Button>
      <Button variant="contained" onClick={() => addNumber(0)}>0</Button>
      <Button variant="contained" onClick={addDecimal}>.</Button>
      <Button variant="contained" onClick={calculate}>=</Button>
      <Button variant="contained" color={"secondary"}  onClick={() => addOperator(Operation.ADD)}>+</Button>
    </Container>
  )
}