import React from "react"
import Header from "../Shared/Header"
import Footer from "../Shared/Footer"
import Csi2024page from "./Csi2024page"
import Unitepage from "./Unitepage"

const index = () => {
  return (
    <>
      <Header />
      <Csi2024page />
      <Unitepage />

      <Footer />
    </>
  )
}

export default index
