import { Stack, Typography } from "@mui/material"
import React from "react"

interface CalculatorDisplayProps {
  display: string
}

const CalculatorDisplay: React.FC<CalculatorDisplayProps> = ({ display }) => {
  return (
    <Stack direction={"row"} justifyContent={"end"} alignItems={"center"} p={2} border={1} borderColor={"#fff"}>
      <Typography color={"white"} component={"h2"} fontSize={"3rem"} overflow={"auto"}>{display}</Typography>
    </Stack>
  )
}

export default CalculatorDisplay
