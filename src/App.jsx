import React from "react"
import RootLayout from "./components/layouts/RootLayout"
import Home from "./components/pages/Home"

function App() {
  console.log("process.env.PORT: ", process.env.PORT)
  return (
    <>
      <RootLayout>
        <Home />
      </RootLayout>
    </>
  )
}

export default App