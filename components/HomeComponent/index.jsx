import React from "react"
import Header from "../Shared/Header"
import Footer from "../Shared/Footer"
import Homepage from './Homepage'
import Aboutpage from "./Aboutpage"

const index = () => {
  return (
    <>
      <Header />
      <Homepage />
      <Aboutpage/>

      <Footer />
    </>
  )
}

export default index
