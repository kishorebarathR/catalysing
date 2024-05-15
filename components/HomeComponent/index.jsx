"use client"
import React from "react"
import Homepage from "./Homepage"
import Aboutpage from "./Aboutpage"

import Seo from "../SeoComponents/Seo"

const index = () => {
  const title = "CSI"
  const description = " Social impact catalysis is the catalyst for a ripple effect of positive change, transcending boundaries and leaving a legacy of hope.The first forum was held in 2019 using the Solut"
  const path = "https://catalysingsocialimpact.in/"
  const metaImage = ""

  return (
    <>
      <Seo
        title={title}
        description={description}
        path={path}
        metaImage={metaImage}
      />
      <Homepage />
      <Aboutpage />
    </>
  )
}

export default index
