import React from "react";
import GuessingGame from "./GuessingGame";
import Stack from "react-bootstrap/Stack"

function App() {
  
  return (
    <Stack gap={3} className="col-md-10 mx-auto">
      <GuessingGame />
  
    </Stack>
  )
}

export default App;
