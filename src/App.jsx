import React from "react"
import RootLayout from "./components/layouts/RootLayout"
import Counter from "./components/pages/Counter"

function App() {
  console.log("process.env.PORT: ", process.env.PORT)
  return (
    <>
      <RootLayout>
        <Counter />
      </RootLayout>
    </>
  )
}

export default App