import React from "react"
import Seo from "../SeoComponents/Seo"
import { SdgPageComponent } from "./SdgPageComponent"
import SdgPage02Component from "./SdgPage02Component"

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

      <SdgPageComponent />
      <SdgPage02Component />
    </>
  )
}

export default index
