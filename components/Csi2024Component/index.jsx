import React from "react"
import Csi2024page from "./Csi2024page"
import Unitepage from "./Unitepage"
import Seo from "../SeoComponents/Seo"

const index = () => {
  const title = "CSI 2024|CSI"
  const description =
    " India&rsquo;s SDG journey is a marathon, not a sprint. While strides in health and clean energy ."
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
      <Csi2024page />
      <Unitepage />
    </>
  )
}

export default index
