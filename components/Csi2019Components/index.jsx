import React from "react"
import Csi2019Compo from "./Csi2019Compo"
import Seo from "../SeoComponents/Seo"

const index = () => {
  const title = "CSI 2019|CSI"
  const description ="Landscape data storytelling intertwines diverse data sets tocraft narratives that contextualise information for specificsubgroups. It transforms raw data into compelling stories,bridging gaps between stakeholders by providing nuancedl"
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
      <Csi2019Compo />
      
    </>
  )
}

export default index
