import React from "react"
import Header from "../Shared/Header"
import Footer from "../Shared/Footer"
import Sdgpage from "./Sdgpage"
import Sdg02page from "./Sdg02page"
import Seo from "../SeoComponents/Seo"

const index = () => {
  const title = "SDG"
  const description =
    " Arrive at stakeholder consensus on how to achieve SDG 2030targets through emulating good practices Entrepreneur network with significant reach and impact and  capability to accelerate SDGs through social"
  const path = "https://catalysingsocialimpact.in/sdg.html"
  const metaImage = ""
  return (
    <>
      <Seo
        title={title}
        description={description}
        path={path}
        metaImage={metaImage}
      />
      <Sdgpage />
      <Sdg02page />
    </>
  )
}

export default index
