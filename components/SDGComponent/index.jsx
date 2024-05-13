import React from "react"
import Header from "../Shared/Header"
import Footer from "../Shared/Footer"
import SDGpage from "./SDGpage"
import SDG02page from "./SDG02page"


const index = () => {
  return (
    <>
      <Header />
      <SDGpage />
      <SDG02page />
      <Footer />
    </>
  )
}

export default index
